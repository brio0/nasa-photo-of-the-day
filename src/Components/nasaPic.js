const NasaPicture = (props) => {
    const { hdurl } = props.photo
    return (
        <div className="img">
            <img src={hdurl} />
        </div>
    )
}

export default NasaPicture