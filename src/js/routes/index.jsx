import {Route, Router} from "react-router";
import {history} from "react-router/es/InternalPropTypes";
import App from "../../App";
import React from "react";

const routers=(
    <Router history={history}>
        <Route path={"/"}>{App}</Route>
    </Router>
)
