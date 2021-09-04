import React from 'react'

const UserData = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
}) => {
    return (
        <di>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </di>
    )
}

export default UserData