import React, {useState} from 'react'

let biography = [
    {date: 1991, description: 'Was born. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {date: 2013, description: 'Graduated from university. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {date: 2008, description: 'Graduated from school. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {date: 1998, description: 'Went to school. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {date: 2014, description: 'Got a job. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
];

const Table = () => {
    const [data, setData] = useState(biography);

    const addItem = () => {
        setData([
            ...data,
            {date: 2020, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
        ]);
    };

    const sort = () => {
        const newData = [...data].sort((a, b) => {
            return a.date - b.date;
        });
        setData(newData);
        console.log(newData);
    };

    return (
        <div className="content workspace">
            <button type="button"
                    onClick={sort}>
                Sort
            </button>
            <button type="button"
                    onClick={addItem}>
                Add item
            </button>
            <table className="table--zigzag">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Event</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map(item => (
                    <tr key={item.date}>
                        <td>{item.date}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;