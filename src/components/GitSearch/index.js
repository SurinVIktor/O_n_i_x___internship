import React from "react";

import "./style.css";
import {Input, Card} from  "../";
import {apiUser} from "../../utils/api";

class GitSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', users: ''};
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

        apiUser(this.state.value).then(res => {
            this.setState(({
                users: res.data.items
            }));
        });
    }

    render () {
        return (
            <div className="content workspace">
                <Input onChange={this.onChange.bind(this)} onSubmit={this.onSubmit.bind(this)}/>

                <div className="users-container">
                    {this.state.users ? this.state.users.map(user => <Card data={user} />) : <h3>Не найдено</h3>}
                </div>
            </div>
        );
    }
}

export default GitSearch;