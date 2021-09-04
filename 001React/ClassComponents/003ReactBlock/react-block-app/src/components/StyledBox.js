import React from 'react'
import styled from 'styled-components'

const StyledBox = (props) => {

    const Box = styled.div`
    border: 1px solid lightgray;
    background-color: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height:  ${props => props.width || '100px'};
    `
    return <Box{...props} />
}

export default StyledBox