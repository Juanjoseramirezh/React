import React, { useState, useEffect } from 'react'

const ListToDo = () => {
    const [tasks, setTasks] = useState([]) //ES UN ARREGLO
    const [newTask, setNewTast] = useState('')
    const [completeTasks, setCompliteTasks] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('localTask')) {
            return setTasks(...JSON.parse(localStorage.getItem('localTask')))
        }
    }, [])

    useEffect(() => localStorage.setItem('localTask', JSON.stringify(tasks)), [tasks])

    useEffect(() => localStorage.setItem('localTask', JSON.stringify(completeTasks)), [completeTasks])


    const onChangeHandler = ({ target: { value } }) => {
        setNewTast(value)
    }

    const addTasks = (e) => {
        console.log(e)
        e.preventDefault()
        setTasks([...tasks, newTask])
    }

    const removeTask = (i) => {
        tasks.splice(i, 1)
        const newTastArray = [...tasks]
        setTasks(newTastArray)
    }

    return (
        <div style={{ marginTop: 50 }}>
            <div>
                {tasks.map((task, i) => {
                    if (completeTasks.includes(task)) {
                        return (
                            <div key={i}>
                                <s>{task}</s>
                            </div>
                        )
                    }
                    return (
                        <div key={i}>
                            <p>{task}</p>
                            <input onChange={() => setCompliteTasks([...completeTasks, task])} type='checkbox' />
                            <button onClick={() => removeTask(i)}>Delete Task</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <form onSubmit={addTasks}>
                    <div>
                        <input onChange={onChangeHandler} type='text' />
                    </div>
                    <div>
                        <input type='submit' value='Add Task' style={{ marginTop: 20 }} />
                    </div>

                </form>
            </div>

        </div >
    )
}

export default ListToDo