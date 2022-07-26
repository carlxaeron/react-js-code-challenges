const Color = ({ colorName, color, onClick = false }) => {
    return (
        <div 
            onClick={onClick}
            className={`color ${onClick === false ? '' : 'clickable'}`} style={{backgroundColor:color}}>{colorName}</div>
    )
}

export default Color;