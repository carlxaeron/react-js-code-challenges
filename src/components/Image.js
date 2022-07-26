const Image = ({
    src,
    alt,
    className = '',
}) => {
    return (
        <img className={`img ${className}`} src={src} alt={alt}/>
    )
}

export default Image;