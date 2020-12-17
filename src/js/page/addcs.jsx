import {DatePicker, Form, Input, Modal} from "antd";
import React, {Component} from "react";

class Addcs extends Component {
    state = {
        visible: false,
        param1:"",
        param2:"",
        param3:"",
        param4:"",
        param5:"",
        param6:"",
        param7:"",
        param8:"",
    }

    constructor(props) {
        super(props);
        this.props.onRef(this)

    }

    show = () => {
        this.setState(
            {visible:true}
        )
    }

    updatedata = (par1, par2, par3, par4, par5, par6, par7, par8) => {
        this.setState(
            {
                visible:true,
                param1:par1,
                param2:par2,
                param3:par3,
                param4:par4,
                param5:par5,
                param6:par6,
                param7:par7,
                param8:par8,
            }
        )
    }

    handleOk=(e)=>{
        this.setState(
            {visible:true}
        )

    }
    handleCancel=(e)=>{
        this.setState(
            {visible:false}
        )
    }

    closs = () => {
        this.setState(
            {visible:true}
         )
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const config = {
            rules: [{type: 'object', required: true, message: 'Please select time!'}],
        };

        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                     onOk={this.handleOk}
                     onCancel={this.handleCancel}>
                    <div>
                        <Form className="login-form">
                            <Form.Item>
                                {getFieldDecorator('reason',{initialValue:this.state.param1},{
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input
                                        placeholder="`1`"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="1">
                                {getFieldDecorator('date-picker', config)(<DatePicker/>)}
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Addcs;
