const Input = ({
    type = 'text',
    onChange = () => {},
    placeholder = '',
    title = '',
}) => {
    return (
        <input 
            type={type}
            onChange={onChange}
            placeholder={title ?? placeholder}
            />
    )
}

export default Input;