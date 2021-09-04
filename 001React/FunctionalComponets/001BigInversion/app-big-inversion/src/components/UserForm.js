import React, { useState } from 'react'

const UserForm = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        console.log(e)
        e.preventDefault()
        const newUser = { email, password }
        setHasBeenSubmitted(true)
        console.log(newUser)
        console.log(typeof (newUser))
    }

    // const formMessage = () => {
    //     if (hasBeenSubmitted) { // CUANDO ENTRA EN TRUE
    //         return 'thanks you for submitting the form'
    //     }
    //     else {
    //         return 'Welcome, please submit the form'
    //     }
    // }

    return (
        <div>
            <form onSubmit={createUser}>
                {/* <h3>{formMessage()}</h3> */}
                {/* { actua igual que un if */}
                {
                    hasBeenSubmitted ?
                        <h3>thanks you for submitting the form</h3> :
                        <h3>Welcome, please submit the form</h3>
                }
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