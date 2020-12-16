import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as  loginAction from '../../actions/login'
import '../../../App.css';
import {Button, Layout, Input, Icon, Tooltip, Popconfirm, message, Form} from "antd";
import Axios from "axios";
import {getParams} from "react-router/es/PatternUtils";
import {Link} from "react-router";
import { browserHistory } from 'react-router'
import RegisterApp from "../../components/Register";



class register extends Component {


    confirm(e) {
        const d=this.state.username;
        const pwd=this.state.pwd;
        if(d==='22'){
            message.info("不行")
            return
        }
        Axios.post("/index",{
            params:{
                username:"1",
                pwd:"1"
            }
        }).then(function (data) {
            message.info("恭喜您登陆了")
            browserHistory.push('List')
        }).catch(function () {
            message.info("恭喜您登陆了")
            browserHistory.push('List')
        });
    }

    cancel(e) {
        console.log(e);
        message.error('Click on No');
    }



    constructor(props) {
        super(props)
        this.state = {
            loginState: false,
            username:'88',
            pwd:''
        }

    }


    /**
     *
     * @returns {*}
     */

    componentDidMount() {
        const {actions} = this.props;
        actions.setLoginState(true)

        this.setState({
            loginState: this.props.B
        },function () {

            console.log(this.props.B.toString());
            console.log(this.state.loginState.toString());
        })


    }


    handler(e){
        this.setState({
            username:e.target.value
        })
    }
    handlermsg(e){
        this.setState({
            pwd:e.target.value
        })
    }
    render() {
        const WrappedRegistrationForm = Form.create({ name: 'register' })(RegisterApp);
        return (
            <div >

                <Layout className={"app-register"}>
                    <WrappedRegistrationForm></WrappedRegistrationForm>
                </Layout>

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
    };
}
export default connect(mapStateToProps, mapDispathToProps)(register);
