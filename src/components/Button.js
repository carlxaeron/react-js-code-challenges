const Button = ({
    type = 'button',
    title,
    className = '',
    onClick = () => {}
}) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${className}`} type={type}>{title}</button>
    )
}

export default Button;