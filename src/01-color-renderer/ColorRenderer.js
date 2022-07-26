import Color from './Color';

const ColorRenderer = ({ setBgColor }) => {
    const colors = [
        {
            color: 'red',
            colorName: 'Red'
        },
        {
            color: 'blue',
            colorName: 'Blue'
        },
        {
            color: 'green',
            colorName: 'Green'
        },
    ]

    return (
        <section className='ColorRenderer'>
        {colors.map(color => <Color 
            onClick={() => setBgColor(color.color)}
            key={color.color}
            color={color.color} 
            colorName={color.colorName}/>)}
        </section>
    )
}

export default ColorRenderer;