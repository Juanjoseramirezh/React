import React from 'react'

class personCard extends React.Component {
    // PROPS ES UN ATRIBUTO QUE VIENE DE LA CLASE COMPONENTS
    constructor(props) {
        super(props)
        this.state = { currentAge: null }
    }

    // metodo de la clase (propio)
    handleOnClick() {
        // destructuramos
        const {
            props: { age },
            state: { currentAge }
        } = this

        // Operacion ternaria
        // const initialAge = !currentAge ? age : currentAge
        const initialAge = currentAge || age
        this.setState(() => ({ currentAge: initialAge + 1 }))
    }

    //METODO HEREDADO
    render() {
        console.log(this)
        // destructuramos el props
        const { firstName, lastName, age, hairColor } = this.props
        const { currentAge } = this.state
        return (
            <div>
                <h1>
                    {lastName} ,{firstName}
                </h1>
                <p>
                    Age: {currentAge || age}
                </p>
                <p>
                    Hair Color: {hairColor}
                </p>
                <p>
                    <button onClick={() => this.handleOnClick()} >
                        Birthday button for {firstName} {lastName}
                    </button>
                </p>
            </div>
        )
    }

}

export default personCard