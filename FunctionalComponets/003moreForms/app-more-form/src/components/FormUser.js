import React, { useState } from 'react'
import validateForm from './validateForm'
import 'bootstrap/dist/css/bootstrap.min.css'

const FormUser = () => {

    const [user, setUser] = useState({})
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [formError, setFormError] = useState({})

    const [confirmPassword, setConfirmPassword] = useState('')

    const onChangeHandler = ({ target: { name, value } }) => {
        const input = { [name]: value }
        const currentUserData = Object.assign(user, input)
        setUser(currentUserData)
    }

    const createUser = e => {
        e.preventDefault()
        const validation = validateForm(user)
        if (typeof validation === 'object ') {
            setFormError(validation)
            return
        }
        setFormError({})
        alert(`Welcome ${user.firstName} `)
        setHasBeenSubmitted(true)

    }

    const onChangeHandlerConfirm = (e) => {
        const newConfirm = e.target.value

        // setConfirmPassword(newConfirm)
        // if (newConfirm === password) {
        //     return true
        // }
    }


    return (
        <div>
            <form onSubmit={createUser}>
                <h3>{hasBeenSubmitted ? 'Thank you for submitting the form!' : 'Welcome, please submit the form'}</h3>
                <div className='form-group'>
                    <label htmlFor='firstName' className='form-label'> First Name: </label>
                    <input type='text' onChange={onChangeHandler} name='firstName' />
                    {formError.firstName && <span style={{ color: 'red' }} >{formError.firstName}</span>}

                </div>
                <div className='mb-3'>
                    <label className='form-label'> Last Name: </label>
                    <input type='text' onChange={onChangeHandler} name='lastName' />
                    {formError.lastName && <p style={{ color: 'red' }} >{formError.lastName}</p>}

                </div>
                <div className='mb-3'>
                    <label className='form-label'> Email: </label>
                    <input type='text' onChange={onChangeHandler} name='email' />
                    {formError.email && <p style={{ color: 'red' }} >{formError.email}</p>}

                </div>
                <div className='mb-3'>
                    <label className='form-label'> Password: </label>
                    <input type='password' onChange={onChangeHandler} name='password' />

                </div>
                <div className='mb-3'>
                    <label className='form-label'> Confirm Password: </label>
                    <input type='password' onChange={onChangeHandlerConfirm} name='confirmPassword' />
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>

        </div>
    )
}

export default FormUser