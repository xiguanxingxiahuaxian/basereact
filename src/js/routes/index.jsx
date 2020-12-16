import {Route, Router} from "react-router";
import {hashHistory} from "react-router";
import App from "../../App";
import React from "react";
import loginApp from "../containter/login/index";
import register from "../containter/register/index"
import worklayout from "../containter/worklayout"

const routers=(
    <Router history={hashHistory}>
        <Route path={"/"}>{App}</Route>
        <Route path={"/login"} component={loginApp}></Route>
        <Route path={"/register" } component={register}></Route>
        <Route path={"/worklayout" } component={worklayout}></Route>
    </Router>
)
export default routers
