import React from 'react'
import styled from 'styled-components'

const StyledData = styled.div`
    p{
        color: ${pr => pr.theme.primaryColor};
        display: flex;
        flex-direction: row;
        &:hover {
            color: ${pr => pr.theme.black};
        }
    }
    .paragraph{
        width: 40%;
        
    }
`

const NasaData = (props) => {
    const { date, explanation, service_version } = props.photo

    return (
        <StyledData className='data'>
            <p> {date} </p>
            <p className='paragraph'> {explanation} </p>
            <p> {service_version} </p>

        </StyledData>
    )
}

export default NasaData