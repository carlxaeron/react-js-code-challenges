const Color = ({ colorName, color }) => {
    return (
        <div className='color' style={{backgroundColor:color}}>{colorName}</div>
    )
}

export default Color;