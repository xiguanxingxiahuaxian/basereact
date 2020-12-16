import React, {Component} from "react";
import * as loginAction from "../actions/login/index";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router";

class LayoutHeader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            B: false
        }
    }

    render() {

        return (

            // eslint-disable-next-line react/react-in-jsx-scope
            <div>
                <h2 style={{
                    float: "left",
                    display: "display: inline-block",
                    position: "absolute",
                    top: "2%",
                    left: "1%",
                    color: "#fff"
                }}>休闲农业休闲平台</h2>
                <label style={{
                    float: "right",
                    display: "display: inline-block",
                    position: "absolute",
                    right: "1%",
                    top: "2%",
                    color: "#fff"
                }}>{this.props.username},你好！<Link style={{color: "#ddfffdd"}} to={"/login"}>退出</Link></label>

            </div>

        );
    }
}

const mapDispathToProps = (dispath) => {

    return {
        actions: bindActionCreators(loginAction, dispath)
    }
};
const mapStateToProps = state => {
    console.info(state)

    return {
        B: state.login.state,
        username: state.login.username
    };
}

export default connect(mapStateToProps, mapDispathToProps)(LayoutHeader);
