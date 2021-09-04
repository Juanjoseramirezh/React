import React from 'react'
import './style.css'

import Subcontent from './Subcontent'
import Advertisment from './Advertisment'

class Main extends React.Component {
    render() {
        return (
            <div className='main-red'>
                <div className='div-subcontent'>
                    <Subcontent />
                    <Subcontent />
                    <Subcontent />
                </div>
                <Advertisment />
            </div>
        )
    }

}

export default Main