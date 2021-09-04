import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonAPI = () => {

    const [pokemon, setPokemon] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon"


    // useEffect(() => {
    //     fetch(url)
    //         .then(result => result.json())
    //         .then(({ result }) => setPokemon(result))
    // }, [])

    const submitPokemon = async (e) => {
        e.preventDefault()
        try {
            const { data: { results } } = await axios.get(url)
            console.log(results)
            setPokemon(results)
        } catch (error) {
            console.log('404')
        }
    }

    return (
        <div>
            <input type='submit' onClick={submitPokemon} value="APP POKEMON" />
            {pokemon.map(({ name }, key) => (
                <p key={key}>{name}</p>
            ))}

        </div>

    )

}

export default PokemonAPI