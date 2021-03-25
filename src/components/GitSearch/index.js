import React, {useState} from "react";

import "./style.css";
import {Input, Card} from  "../";
import {apiUser} from "../../utils/api";

const GitSearch = () => {
    const [value, setValue] = useState("");
    const [users, setUsers] = useState("");

    const onChange = event => {
        setValue(event.target.value);
    }

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return ;
        }

        if (value.trim()) {
            apiUser(value).then(res => {
                setUsers(res.data.items);
                console.log(users);
            });
        }
    }

    return (
        <div className="content workspace">
            <Input onChange={onChange} value={value} onSubmit={onSubmit}/>

            <div className="users-container">
                {users ? users.map(user => <Card data={user} />) : <h3>Не найдено</h3>}
            </div>
        </div>
    );
}

export default GitSearch;