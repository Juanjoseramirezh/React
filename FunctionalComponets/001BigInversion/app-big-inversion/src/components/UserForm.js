import React, { useState } from 'react'

const UserForm = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = (e) => {
        console.log(e)
        e.preventDefault()
        const newUser = { email, password }
        console.log(newUser)
        console.log(typeof (newUser))
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label> User Name: </label>
                    <input type='text' onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label> Email: </label>
                    <input type='text' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label> Password: </label>
                    <input type='text' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type='submit' value='Create User' />
            </form>
        </div>
    )
}

export default UserForm