import React, { useState, useEffect } from 'react'

const PokemonAPI = () => {

    const [pokemon, setPokemon] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon"

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(({ result }) => setPokemon(result))
    }, [])

    return (
        <div>
            <button>Fetch Pokemon</button>
            {pokemon.map(({ name }, key) => (
                <p key={key}>{name}</p>
            ))}
        </div>

    )

}

export default PokemonAPI