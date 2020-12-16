import React, {Component} from "react";
import {Button, Form, Icon, Input, message, Radio} from 'antd';
import axios from "axios";
import {hashHistory} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Qs from "qs"
import * as loginAction from "../actions/login/index";
import Dialog_register from "./Dialog_register"

class LoginComponent extends Component {


    handleSubmit = e => {
        console.info(this.props)
        const {actions} = this.props;
        console.info(this.props)
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    url: '/api/register',
                    method: 'post',
                    data: {
                        username: values.username,
                        pwd: values.password
                    },
                    transformRequest: [function (data) {//在请求之前对data传参进行格式转换
                        data = Qs.stringify(data)
                        return data
                    }],
                }).then(function (data) {
                    if (data.data.codeAndMegDTO.code != 0) {
                        message.info(data.data.codeAndMegDTO.meg)
                    } else {
                        actions.setLoginState(true, values.username)

                        console.info(data.data)
                        console.info(data.data.userEntity.type_)
                        hashHistory.push("/worklayout");
                    }
                }).catch(function (e) {
                    console.info(e)

                });
            }
        });
    };

    onRef = (ref) => {
        this.child = ref
        console.info(this.child)
    }

    show = () => {
        this.child.showModal();
    }

    register = () => {
        this.props.form.validateFields((err, values) => {
            hashHistory.push('/register')
        })
    }


    render() {

        console.info(this.props.username)
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <h1 style={{textAlign: "center", marginTop: "10px", color: "#008B8B"}}>休闲农业</h1>
                <Dialog_register onRef={this.onRef}/>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                        </Button>

                        <a onClick={this.register.bind(this)}>register now!</a>

                    </Form.Item>
                </Form>
            </div>

        );
    }
}

const mapDispathToProps = (dispath) => {
    console.info(loginAction)
    return {
        actions: bindActionCreators(loginAction, dispath)
    }
};
const mapStateToProps = state => {
    return {
        B: state.login.state,
        username: state.login.username
    };
}

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
