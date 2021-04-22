import React from "react";
import { Spin } from 'antd';
import 'antd/dist/antd.css';

import "./style.css";
import {Input, Card, Modal} from  "../";
import {apiUser} from "../../utils/api";

class GitSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', users: null, isLoading: '', status: {}, modal: false};
    }

    onChange(e) {
        this.setState(({
            value: e.target.value
        }));
    }

    onSubmit (event) {
        if (event.key !== 'Enter') {
            return;
        }

        this.setState({
            isLoading: true,
            users: '',
            modal: true,
        });

        apiUser(this.state.value).then(res => {
            this.setState(({
                users: res.data.items,
                status: {
                    value: 'success',
                    text: 'Все окей!!!'
                },
                isLoading: false
            }));
        }).catch( error => {
            this.setState(({
                users: false,
                status: {
                    value: 'error',
                    text: error
                },
                isLoading: ''
            }));
        });
    }

    render () {
        return (
            <div className="content workspace">
                <Modal showModal={this.state.modal} statusModal={this.state.status.value} bodyModal={this.state.status.text} headerModal="" />
                <Input onChange={this.onChange.bind(this)} onSubmit={this.onSubmit.bind(this)}/>

                <div className="users-container">
                    {
                        this.state.isLoading
                            ? <Spin tip="Загрузка..." />
                            : this.state.users?.length === 0 ? <h3>Не найдено</h3> : ''
                    }
                    {this.state.users?.length > 0 ? this.state.users.map(user => <Card data={user} />) : ''}
                </div>
            </div>
        );
    }
}

export default GitSearch;
