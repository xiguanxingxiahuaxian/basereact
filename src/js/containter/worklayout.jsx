import React, {Component} from "react";

import {Icon, Layout, Menu} from 'antd';
import LayoutHeader from "../components/LayoutHeader";
import {hashHistory, Link, Route, Router} from "react-router";
import cs from "../page/cs";



const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class worklayout extends Component {

    render() {
        return (
            <div>
                <div style={{height: '60px', backgroundColor: "#b2dfdb"}}>
                    <LayoutHeader></LayoutHeader>
                </div>
                <Layout>

                    <Layout>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}>
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span><Icon type="user"/>发布信息</span>}>
                                    <Menu.Item key="1"><Link to={"/savenotify"}></Link>添加通知</Menu.Item>
                                    <Menu.Item key="11"><Link to={"/cs"}></Link>测试功能列表</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span><Icon type="user"/>用户</span>}>
                                    <Menu.Item key="1"><Link to={"/usermanager"}></Link>管理用户信息</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span><Icon type="user"/>区域规划</span>}>
                                    <Menu.Item key="1"><Link to={"/addArea"}></Link>添加停车场</Menu.Item>
                                    <Menu.Item key="1"><Link to={"/Arealist"}></Link>停车场</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub21"
                                    title={
                                        <span><Icon type="user"/>车位</span>}>
                                    <Menu.Item key="1"><Link to={"/addCarPosition"}></Link>添加车位</Menu.Item>
                                    <Menu.Item key="1"><Link to={"/CarPostionlist"}></Link>车位</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span><Icon type="user"/>投诉</span>}>
                                    <Menu.Item key="1"><Link to={"/tsposionlist"}></Link>反馈投诉</Menu.Item>

                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>

                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}>
                                <div>
                                    <Router history={hashHistory}>

                                      {/*  <Route path={"/savenotify"} component={AddNotify}></Route>
                                        <Route path={"/notifylist"} component={notifylist}></Route>
                                        <Route path={"/usermanager"} component={Manager}></Route>
                                        <Route path={"/addArea"} component={AddArea}></Route>
                                        <Route path={"/addCarPosition"} component={AddCarPosition}></Route>
                                        <Route path={"/Arealist"} component={Arealist}></Route>
                                        <Route path={"/tsposionlist"} component={TsPostionlist}></Route>
                                        <Route path={"/CarPostionlist"} component={CarPostionlist}></Route>*/}
                                        <Route path={"/cs"} component={cs}></Route>
                                    </Router>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default worklayout
