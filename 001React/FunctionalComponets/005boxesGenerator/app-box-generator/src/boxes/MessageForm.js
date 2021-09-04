import React, { useState } from 'react'

const MessageForm = (props) => {

    const [msg, setMsg] = useState('')

    const handleOnChange = (e) => {
        const lastMsg = e.target.value
        setMsg(lastMsg)
    }

    const handleSubmit = (e) => {
        e.prevenDefault()
        props.onNewMessage(msg)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea
                rows='4'
                cols='50'
                placeholder='Enter a Message'
                onChange={handleOnChange}
                value={msg}
            ></textarea>
            <input type='submit' value='Send Message'></input>
        </form>
    )
}

export default MessageForm