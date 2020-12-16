import React, {Component} from "react";
import {AutoComplete, Button, Form, Icon, Input, message, Select, Tooltip,} from 'antd';
import axios from "axios";

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;


class Register extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios({
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    url: '/api/saveSchool',
                    method: 'post',
                    data: {
                        "address": values.address,
                        "id": 0,
                        "schoolname": values.schoolname,
                        "schoolno": "string",
                        "tel": values.phone,
                        username: values.nickname,
                    },
                    /* transformRequest: [function (data) {//在请求之前对data传参进行格式转换
                         data = Qs.stringify(data)
                         return data
                     }],*/
                }).then(function (data) {
                    message.info(data.data.meg)
                }).catch(function (e) {
                    console.info(e)

                });
            }

        });
    };

    render() {

        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <div style={{marginRight: "200px", marginTop: "60px"}}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label={
                            <span>
              Nickname&nbsp;
                                <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
                        }
                    >
                        {getFieldDecorator('nickname',  {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input disabled={true}/>)}
                    </Form.Item>
                    <Form.Item label="E-address">
                        {getFieldDecorator('address', {})(<Input/>)}
                    </Form.Item>

                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
                    </Form.Item>

                    <Form.Item label="School Name">
                        {getFieldDecorator('schoolname', {})(<Input/>)}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        );

    }

}

const WrappedRegistrationForm = Form.create({name: 'RegisterSchool'})(Register);
export default WrappedRegistrationForm
