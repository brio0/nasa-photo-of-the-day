import React from 'react'
import styled from 'styled-components'

const StyledData = styled.div`

    div{
        display:flex;
        justify-content: space-evenly;
    }
    p{
        color: ${pr => pr.theme.primaryColor};
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
            <div>
                <p> {date} </p>
                <p className='paragraph'> {explanation} </p>
                <p> {service_version} </p>
            </div>

        </StyledData>
    )
}

export default NasaData