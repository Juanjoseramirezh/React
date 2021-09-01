import React, { useState } from 'react'

const Tabs = props => {
    console.log(props)
    const [selectedTab, setSelectedTad] = useState(1)


    return (
        <div style={{ marginTop: 30 }}>
            <header>
                {props.tabsItems.map((tab, i) => {

                    // DEFINENDO EL STYLE DEL PRIMER HEADER
                    const labelStyles = {
                        padding: 20,
                        marginRight: 10,
                        border: "1px solid gray",
                    }

                    if (selectedTab === i) {
                        labelStyles.backgroundColor = 'black';
                        labelStyles.color = 'white'
                    }

                    return (
                        <span
                            key={i}
                            onClick={e => {
                                setSelectedTad(i)
                            }}
                            style={labelStyles}>
                            {tab.label}
                        </span>
                    )
                })}
            </header>
            <main style={{
                margin: '50px',
                marginLeft: 'auto',
                marginRight: 'auto',
                border: '1px solid gray',
                padding: 30,
                width: '40%'
            }}>
                <h3>{props.tabsItems[selectedTab].content}</h3>
            </main>
        </div>
    )
}

export default Tabs