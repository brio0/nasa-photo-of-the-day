import React from 'react'
import styled from 'styled-components'

const StyledPic = styled.div`
    color: ${pr => pr.theme.primaryColor};
    width: 70%;

    h2 {
        font-family: Tahoma;
        color: ${pr => pr.theme.primaryColor};
    }
    @meia only scren and ${pr => pr.theme.breakpointMobile} {
        width: 100%;
    }
    &:hover {
            color: ${pr => pr.theme.black};
        }
`

const NasaPicture = (props) => {
    const { hdurl, title, copyright } = props.photo
    return (
        <StyledPic className="img">
            <h2> {title} </h2>
            <img src={hdurl} />
            <p>{copyright}</p>
        </StyledPic>
    )
}

export default NasaPicture