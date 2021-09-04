import React from 'react'

const UserForm = ({ user, setUser }) => {

    const handleOnChange = ({ target: { name, value } }) => {
        const newUser = { ...Object.assign(user, { [name]: value }) }
        setUser(newUser)
        console.log(newUser)
    }

    return (
        <form>
            <div>
                <label>First Name</label>
                <input
                    onChange={handleOnChange}
                    type="text"
                    name="firstName"
                    id="firtName"
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    onChange={handleOnChange}
                    type="text"
                    name="lastName"
                    id="lastName"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    onChange={handleOnChange}
                    type="email"
                    name="email"
                    id="email"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    onChange={handleOnChange}
                    type="password"
                    name="password"
                    id="password"
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                    onChange={handleOnChange}
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                />
            </div>
        </form>
    )
}

export default UserForm

