import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const { id } = useParams()

    return <h1>The number is: {id}</h1>
}

export default Number