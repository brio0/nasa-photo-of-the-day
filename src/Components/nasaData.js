import React from 'react'

const NasaData = (props) => {
    const { date, explanation, service_version } = props.photo

    return (
        <div className='data'>
            <p> {date} </p>
            <p> {explanation} </p>
            <p> {service_version} </p>

        </div>
    )
}

export default NasaData