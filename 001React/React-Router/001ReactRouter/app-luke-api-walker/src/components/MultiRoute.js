import React from 'react'
import { useParams } from 'react-router-dom'

const MultiRoute = () => {
    const { id } = useParams()
    const { colorBg } = useParams()
    const { colorTxt } = useParams()

    const styleH1 = {
        color: colorTxt,
        backgroundColor: colorBg,
    }

    return (
        <h1 style={styleH1}>The Word is : {id}</h1>
    )

}

export default MultiRoute