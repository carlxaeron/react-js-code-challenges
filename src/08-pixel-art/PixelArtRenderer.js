import { createContext, useContext, useState } from "react"

const ColorContext = createContext()

const Pixel = ({
    color = 'white',
    onClick = () => {}
}) => {
    return (
        <div className='pixel'
            onClick={onClick}    
            style={{backgroundColor:color}}></div>
    )
}

const PixelCont = () => {
    const clr = useContext(ColorContext)
    const [color,setColor] = useState('white')
    return (
        <div>
           <Pixel onClick={() => setColor(clr.color)} color={color}/> 
        </div>
    )
}

const PixelArt = () => {
    const art = [...Array(100)]
    return (
        <div className="pixel-art">
        {art.map((d,i) => (
            <PixelCont key={i}/>
        ))}
        </div>
    )
}

const ColorPicker = () => {
    const { setColor, color } = useContext(ColorContext)
    const colors = [
        'red',
        'green',
        'blue',
        'yellow',
        'pink',
        'black',
        'gray',
        'purple',
        'white',
        'orange',
    ]

    return (
        <div>
            <br/>
            Current Color: <Pixel color={color}/>
            <br/>
            <div className="pixel-art">
            <br/>
                {colors.map((d,i) => (
                    <Pixel
                        onClick={() => setColor(d)}
                        color={d} key={i}/>
                ))}
            </div>
        </div>
    )
}

const PixelArtRenderer = () => {
    const [color,setColor] = useState('white')
    return (
        <ColorContext.Provider value={{color,setColor}}>
            <section>
                <ColorPicker/>
                <PixelArt/>
            </section>
        </ColorContext.Provider>
    )
}

export default PixelArtRenderer