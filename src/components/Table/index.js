import React, {useState} from 'react'

import "./style.css";

let biography = [
    {id: 1, date: 1991, description: 'Was born. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 2, date: 2013, description: 'Graduated from university. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 3, date: 2008, description: 'Graduated from school. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 4, date: 1998, description: 'Went to school. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: 5, date: 2014, description: 'Got a job. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
];

const Index = () => {
    const [data, setData] = useState(biography);
    const [year, setYear] = useState('');
    const [desc, setDesc] = useState('');

    const addItem = (e) => {
        setData([
            ...data,
            {id: Date.now(),date: year, description: desc}
        ]);
        e.preventDefault();
    };

    const sort = () => {
        const newData = mySort(data);
        setData(newData);
        console.log(newData);
    };

    const mySort = (data) => {
        for (let n = 0; n < data.length; n++) {
            for (let i = 0; i < data.length - 1 - n; i++) {
                if (data[i].date > data[i + 1].date) {
                    const buff = data[i]
                    data[i] = data[i + 1]
                    data[i + 1] = buff
                }
            }
        }
        let newData = data.map((el, index) => {
            return {
                id: Date.now(),
                date: el.date,
                description: el.description,
            }
        })
        console.log(newData);
        return newData;
    }

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

export default Index;