
import {Button, message, Modal} from "antd";
import {Component} from "react";
import React from 'react'
class Dialog_register extends Component{


    state = { visible: false };

    constructor(props){
        super(props);
        this.props.onRef(this)

    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    add1 =()=>{
        message.info("1")
    }
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    // eslint-disable-next-line react/require-render-return
    render() {
        return(

            <div>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
              {/*  <Button type="primary"   onClick={this.showModal}>
                    Open Modal
                </Button>*/}
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    {/* eslint-disable-next-line react/react-in-jsx-scope */}
                    <p>Some contents...</p>
                    {/* eslint-disable-next-line react/react-in-jsx-scope */}
                    <p>Some contents...</p>
                    {/* eslint-disable-next-line react/react-in-jsx-scope */}
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    {/* eslint-disable-next-line react/react-in-jsx-scope */}
                    <p>Some contents...</p>
                    {/* eslint-disable-next-line react/react-in-jsx-scope */}
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }

}

export  default  Dialog_register;
