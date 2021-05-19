import React, {useState} from 'react';
import { useTranslation } from "react-i18next";

import "./style.css";

let biography = [
    {id: 1, date: 1991, description: 'Was born. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 2, date: 2013, description: 'Graduated from university. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 3, date: 2008, description: 'Graduated from school. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 4, date: 1998, description: 'Went to school. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 5, date: 2014, description: 'Got a job. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
];

const Table = () => {
    const [data, setData] = useState(biography);
    const [year, setYear] = useState('');
    const [desc, setDesc] = useState('');
    const [currentTr, setCurrentTr] = useState(null);

    const { t } = useTranslation();

    const addItem = (e) => {
        e.preventDefault();

        setData([
            ...data,
            {id: Date.now(),date: year, description: desc}
        ]);
    };

    const sort = () => {
        console.log(data);
        data.sort((a, b) => a.date - b.date);
        setData([...data]);
        console.log(data);
    };

    const deleteRow = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };

    const dragStartHandler = (e, card) => {
        setCurrentTr(card);
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
    }

    const dropHandler = (e, card) => {
        e.preventDefault();
        setData(data.map(c => {
            if (c.id === card.id) {
                return {...c, id: currentTr.id}
            }
            if (c.id === currentTr.id) {
                return {...c, id: card.id}
            }

            return c;
        }));
    }

    return (
        <div className="content workspace">
            <div className="row">
                <form onSubmit={addItem}>
                    <label htmlFor="inputYear">{t("table.year")}: </label>
                    <input type="text" onChange={(e) => {setYear(e.target.value)}} name="year" id="inputYear"/>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor="inputDesc">{t("table.description")}: </label>
                    <input type="text" onChange={(e) => {setDesc(e.target.value)}} name="desc" id="inputDesc" />
                    &nbsp;
                    <button type="submit">{t("table.add_item")}</button>
                </form>
                <button type="button"
                        onClick={sort}>
                    {t("table.sort")}
                </button>
            </div>

            <table className="table--zigzag">
                <thead>
                <tr>
                    <th>{t("table.year")}</th>
                    <th>{t("table.event")}</th>
                    <th>{t("table.action")}</th>
                </tr>
                </thead>
                <tbody>
                {data && data.sort((a, b) => a.id - b.id).map(item => (
                    <tr
                        onDragStart={(e) => dragStartHandler(e, item)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, item)}
                        draggable={true}
                        className="card"
                        key={item.date}
                    >
                        <td>{item.date}</td>
                        <td>{item.description}</td>
                        <td><button onClick={deleteRow.bind(this, item.id)}>{t("table.del")}</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;