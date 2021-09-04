import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StarWarApi = () => {

    const [menuData, setMenuData] = useState([])
    const [selectMenuData, setSelectMenuData] = useState()
    const [starWarFind, setStarWarFind] = useState({})
    const [resultStarWar, setResultStarWar] = useState()

    const [errors, setErrors] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://swapi.dev/api/')

                // console.log(data)
                console.log(Object.keys(data))

                const starWarMenuArray = Object.keys(data)

                setMenuData(starWarMenuArray)


            } catch (error) {
                console.log('404')
            }

        }
        fetchData()
    }, [errors])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.get(`https://swapi.dev/api/${starWarFind.select}/${starWarFind.id}`)
            console.log(data)

            const restultStarWarArray = Object.entries(data)

            setResultStarWar(restultStarWarArray)
            console.log(resultStarWar)

        } catch (error) {
            setErrors(true)
        }
    }

    const onChangeHandler = ({ target: { name, value } }) => {
        // console.log({ [name]: value })
        setStarWarFind({ ...starWarFind, ...{ [name]: value } })
        console.log(starWarFind)
        if (errors === true) {
            setErrors(false)
        }
    }


    return (
        <div style={{ marginTop: 20 }}>
            <form onSubmit={onSubmitHandler}>
                <div style={{ display: "inline-block" }}>
                    <label>Search</label>
                    <select name='select' onChange={onChangeHandler}>
                        {menuData.map((menu, key) => (
                            <option key={key} value={menu}> {menu} </option>
                        ))}
                    </select>
                </div>
                <div style={{ display: "inline-block", marginLeft: 10 }}>
                    <label>Id:</label>
                    <input name='id' type='text' onChange={onChangeHandler} />
                    <input type='submit' />
                </div>
            </form>
            <div style={{ marginTop: 40 }}>
                {resultStarWar.map(([atrr, value], key) => (
                    <p key={key}>{atrr} <b>:</b> {value} </p>
                ))}
            </div>
        </div>
    )
}

export default StarWarApi