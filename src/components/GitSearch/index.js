import React, {useState} from "react";

import "./style.css";
import {Input} from  "../";

const GitSearch = () => {
    const [value, setValue] = useState("");

    const onChange = event => {
        setValue(event.target.value);
    }

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return ;
        }

        if (value.trim()) {

        }
    }

    return (
        <div className="content workspace">
            <Input onChange={onChange} value={value} onSubmit={onSubmit}/>
        </div>
    );
}

export default GitSearch;