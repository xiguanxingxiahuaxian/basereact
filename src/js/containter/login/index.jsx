import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as  loginAction from '../../actions/login/index'
import '../../../App.css';
import {Button, Layout, Input, Icon, Tooltip, Popconfirm, message, Form} from "antd";
import LoginComponent from "../../components/LoginComponent";


class loginApp extends Component {


    constructor(props) {
        super(props)
        this.state = {
            loginState: false,
        }

    }


    /**
     *
     * @returns {*}
     */

    componentDidMount() {

    }


    render() {
        const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginComponent);
        return (
            <div >
                <Layout className={"App-login"}>
                    <WrappedNormalLoginForm  ></WrappedNormalLoginForm>
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
    console.info("查看state")
    console.info(state)
    return {
        B: state.login.state,
        username:state.login.username,
    };
}
export default connect(mapStateToProps, mapDispathToProps)(loginApp);
