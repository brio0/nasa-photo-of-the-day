import React from 'react'
import styled from 'styled-components'

const StyledPic = styled.div`
    color: ${pr => pr.theme.primaryColor};
    width: 100%;


    div {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    img {
        height: 80vh;
        width:80vw;
    }

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
            <div>
                <h2> {title} </h2>
                <p>{copyright}</p>
                <img src={hdurl} />
            </div>
        </StyledPic>
    )
}

export default NasaPicture