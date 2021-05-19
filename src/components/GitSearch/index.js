import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Spin } from 'antd';
import 'antd/dist/antd.css';

import "./style.css";
import {Input, Card, Modal} from  "../";
import {apiUser} from "../../utils/api";

const GitSearch = () => {
    const [ value, setValue ] = useState('');
    const [ users, setUsers ] = useState(null);
    const [ isLoading, setIsLoading ] = useState('');
    const [ status, setStatus ] = useState({ value: 'error', text: '' });
    const [ modal, setModal ] = useState(false);

    const { t } = useTranslation();

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        setIsLoading(true);
        setUsers('');
        setModal(true);

        apiUser(value).then(res => {
            setUsers(res.data.items);
            setStatus({ value: 'success', text: t("git_search.ok_msg") });
            setIsLoading(false);
        }).catch( error => {
            setUsers(false);
            setStatus({ value: 'error', text: error});
            setIsLoading('');
        });
    }

    return (
        <div className="content workspace">
            <Modal showModal={modal} statusModal={status.value} bodyModal={status.text} headerModal="" />
            <Input onChange={onChange.bind(this)} onSubmit={onSubmit.bind(this)}/>

            <div className="users-container">
                {
                    isLoading
                        ? <Spin tip={t("git_search.spin")} />
                        : users?.length === 0 ? <h3>Не найдено</h3> : ''
                }
                {users?.length > 0 ? users.map(user => <Card data={user} />) : ''}
            </div>
        </div>
    );
}

export default GitSearch;
