import React, {Component} from "react";
import * as axios from "axios";
import {Form, message, Table} from 'antd';
import Input from "antd/es/input";
import addcs from "./addcs";
import Button from "antd/es/button";

export default class cs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "",
        }
    }

    componentDidMount() {
        const _this = this;
        /*axios({
               headers: {
                   'Content-Type': 'application/json; charset=UTF-8'
               },
               url: '/api/findAllArea',
               method: 'get',
               data: {

               },
           }).then(function (data) {
               message.info(data.data.meg)
           }).catch(function (e) {
               console.info(e)
           });*/

        axios.get("/api/findAllArea").then(function (personlist) {
            console.info(personlist)
            _this.setState({
                data: personlist
            })
        }).catch(function (e) {
            console.info(e)
        });

    }

    /**
     * 添加
     */
    add() {
        this.child.show()
    }

    /**
     * 更新
     * @param par1
     * @param par2
     * @param par3
     * @param par4
     * @param par5
     * @param par6
     * @param par7
     * @param par8
     */
    update(par1, par2, par3, par4, par5, par6, par7, par8) {
        this.child.updatedata(par1, par2, par3, par4, par5, par6, par7, par8)
    }

    delete(key) {
        const {data} = this.props.data
        console.info(data)
        /* function filter1(arr, value) {
             for (var i = 0; i < arr.length; i++) {
                 if (arr[i].key == value) {
                     arr.splice(i, 1)
                 }
             }
             return arr
         }


         this.setState({
             data: filter1(data, key)
         })*/


        axios({
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            url: '/api/deleteArea',
            method: 'post',
            data: {
                "areaname": "string",
                "dlatitude": "string",
                "dlongtude": "string",
                "dpreprice": "string",
                "dreduction": "string",
                "dreductprice": "string",
                "dselect": "string",
                "id": key
            },
        }).then(function (data) {
            message.info(data.data.meg)
            this.componentDidMount()
        }).catch(function (e) {
            console.info(e)
        });
    }

    onRef = (ref) => {
        this.child = ref
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                text: this.state.data.id
            },
            {
                title: 'areaname',
                dataIndex: 'areaname',
                key: 'areaname',
                text: this.state.data.areaname
            },
            {
                title: 'dlatitude',
                dataIndex: 'dlatitude',
                key: 'dlatitude',
                text: this.state.data.dlatitude
            },
            {
                title: 'dlongtude',
                dataIndex: 'dlongtude',
                key: 'dlongtude',
                text: this.state.data.dlongtude
            },
            {
                title: 'dpreprice',
                dataIndex: 'dpreprice',
                key: 'dpreprice',
                text: this.state.data.dpreprice
            },
            {
                title: 'dreduction',
                dataIndex: 'dreduction',
                key: 'dreduction',
                text: this.state.data.dreduction
            },
            {
                title: 'dreductprice',
                dataIndex: 'dreductprice',
                key: 'dreductprice',
                text: this.state.data.dreductprice
            },
            {
                title: 'dselect',
                dataIndex: 'dselect',
                key: 'dselect',
                text: this.state.data.dselect
            }, {
                title: 'update',
                key: 'update',
                render: (text, record) => (
                    <a onClick={this.update.bind(this,
                        record.areaname,
                        record.dlatitude,
                        record.dlongtude,
                        record.dpreprice,
                        record.dreduction,
                        record.dreductprice,
                        record.dselect,
                        record.id)}>修改</a>
                )
            },
            {
                title: 'delete',
                key: 'delete',
                render: (text, record) => (
                    <a onClick={this.delete.bind(this, record.id)}>删除</a>
                )
            }
        ];
        const WrappedRegistrationForm = Form.create({name: 'addcs'})(addcs)
        return (
            <div>
                <div>
                    <Button type="primary" onClick={this.add.bind(this)}>添加</Button>

                </div>
                <WrappedRegistrationForm parent={this} onRef={this.onRef}/>
                <Table columns={columns} dataSource={this.state.data.data}/>
            </div>
        )
    }
}
