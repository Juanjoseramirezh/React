import React from 'react'

// cuando quiero fragmentar las partes del html

const greatingHelloWorld = (
    <div>
        <h1>Hello Dojo!</h1>
    </div>

)

const listToDo = (
    <div>
        <p>Things I need to do:</p>
        <ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
        </ul>
    </div>
)

// COMPONENTE FINAL
const HelloWordl = () => {
    return (
        <div>
            {greatingHelloWorld}
            {listToDo}
        </div >
    )
}

export default HelloWordl