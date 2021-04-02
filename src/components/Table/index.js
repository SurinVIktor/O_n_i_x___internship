import React, {useState} from 'react'

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

    return (
        <div className="content workspace">
            <div className="row">
                <form onSubmit={addItem}>
                    <label htmlFor="inputYear">Year: </label>
                    <input type="text" onChange={(e) => {setYear(e.target.value)}} name="year" id="inputYear"/>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor="inputDesc">Description: </label>
                    <input type="text" onChange={(e) => {setDesc(e.target.value)}} name="desc" id="inputDesc" />
                    &nbsp;
                    <button type="submit">Add item</button>
                </form>
                <button type="button"
                        onClick={sort}>
                    Sort
                </button>
            </div>

            <table className="table--zigzag">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Event</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map(item => (
                    <tr key={item.date}>
                        <td>{item.date}</td>
                        <td>{item.description}</td>
                        <td><button onClick={deleteRow.bind(this, item.id)}>Del</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;