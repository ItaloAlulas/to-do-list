import React, { useState } from 'react'

function ToDoList() {
    
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')

    function addTask() {

        if (inputValue.trim() === '') return

        setTasks(t => [...t, inputValue ])

        setInputValue('')
    }

    function deleteTask(key) {

        const updatedTasks = tasks.filter((_, index) => index !== key)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {

        if (index > 0) {
            const updatedTasks = [...tasks]

            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index - 1]
            updatedTasks[index - 1] = temp

            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {

        if (index < tasks.length-1 ) {
            
            const updatedTasks = [...tasks]

            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index + 1]
            updatedTasks[index + 1] = temp

            setTasks(updatedTasks)
        }
    }

    return (
        <div className='to-do-list-container'>
            <h1>To-Do List</h1>
            <div className="input-task-container">
                <input type="text" 
                       id='input-task' 
                       placeholder='Enter a task' 
                       value={inputValue} 
                       onChange={e => setInputValue(e.target.value)}
                />
                <button 
                    className='add-task-button' 
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <div className="tasks-container">
                <ul>
                    {tasks.map((task, index) =>
                        <li className='task' key={index}>
                            <button
                                className="delete-task-button"
                                onClick={() => deleteTask(index)}>
                                ✔
                            </button>
                            <div className="task-name-container">
                                <p className='task-name'>{task}</p>
                            </div>
                            <div className="move-buttons">
                                <button 
                                    className="up-button"
                                    onClick={() => moveTaskUp(index)}>
                                    ▲
                                </button>
                                <button 
                                    className="down-button"
                                    onClick={() => moveTaskDown(index)}>
                                    ▼
                                </button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default ToDoList