import React from "react";
import { Spin } from 'antd';
import 'antd/dist/antd.css';

import "./style.css";
import {Input, Card} from  "../";
import {apiUser} from "../../utils/api";

class GitSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', users: null, isLoading: ''};
    }

    onChange(e) {
        this.setState(({
            value: e.target.value
        }));
    }

    onSubmit (event) {
        if (event.key !== 'Enter') {
            return ;
        }

        this.setState({
            isLoading: true,
            users: ''
        });

        apiUser(this.state.value).then(res => {
            this.setState(({
                users: res.data.items,
                isLoading: false
            }));
        }).catch( () => {
            this.setState(({
                users: false,
                isLoading: ''
            }));
        });
    }

    render () {
        return (
            <div className="content workspace">
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