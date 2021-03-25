import {useState} from "react";

import "./style.css";

const Input = ({onSubmit, onChange, value}) => {
    return (
        <input
            type="text"
            className="input-component"
            onChange={onChange}
            onKeyPress={onSubmit}
            placeholder="Поиск пользователя..."
            value={value}
        />
    );
}

export default Input;