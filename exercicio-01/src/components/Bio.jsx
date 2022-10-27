function Bio(props) {
    return (
        <div className="Bio">
            <h2>
                {props.texto}
            </h2>
            <button className="Button">
                Saiba mais
            </button>
        </div>
    )
}

export default Bio