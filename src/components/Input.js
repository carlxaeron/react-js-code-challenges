const Input = ({
    type = 'text',
    onChange = () => {},
    placeholder = '',
    title = '',
    required = false,
    value = '',
}) => {
    return (
        <input 
            type={type}
            onChange={onChange}
            placeholder={title ?? placeholder}
            required={required}
            value={value}
            />
    )
}

export default Input;