import React, { useState } from "react";



interface List {

    userId: number,
    id: number,
    title: string,
    completed: boolean,

}

let defaultList = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": true
    },

];
const Todolist = () => {

    const [input, setInput] = useState("");

    const [list, setList] = useState(defaultList);


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const addClickHandler = () => {
        const newTodo = {
            "userId": 1,
            "id": Math.max(...list.map(item => item.id)) + 1,
            "title": input,
            "completed": false
        };

        setList([...list, newTodo]);
    };

    const checkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {

        setList(list.map(item => {
            if (item.id === id) {
                item.completed = e.target.checked
            }
            return item;
        }));
    };

    return (
        <>
            <div className="addForm">
                <input type="text" data-testid="inputTxt" onChange={(e) => changeHandler(e)} value={input} />
                <button name="addButton" type="button" onClick={addClickHandler}>Add</button>
            </div>
                {
                    list.map(item =>
                        <div className="todoItem" key={item.id} data-testid={item.id} >
                            <div className="item">
                            <input data-testid={"checkbox" + item.id} type="checkbox" defaultChecked={item.completed} onChange={(e) => checkChangeHandler(e, item.id)} />
                            <span data-testid={"title" + item.id}>{item.title}</span>
                            </div>
                            
                            <div className="status">{item.completed ? 'Complete' : 'Incomplete'}</div>
                        </div>)
                }
            
        </>
    )
}

export default Todolist;