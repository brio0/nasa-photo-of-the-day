const NasaPicture = (props) => {
    const { hdurl, title, copyright } = props.photo
    return (
        <div className="img">
            <h2> {title} </h2>
            <img src={hdurl} />
            <p>{copyright}</p>
        </div>
    )
}

export default NasaPicture