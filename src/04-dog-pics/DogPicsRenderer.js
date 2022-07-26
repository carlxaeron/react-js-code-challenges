import { useEffect, useState } from "react"
import Button from "./../components/Button"
import Image from "./../components/Image"

const fetchImg = async () => {
    const req = await fetch('https://dog.ceo/api/breeds/image/random')
    const resp = await req.json()
    return { src: resp.message }
}

const DogPicsRenderer = () => {
    const [img, setImg] = useState({
        src: '',
        alt: '',
    })

    const getImg = async () => {
        const img = await fetchImg()
        setImg({
            src: img.src,
            alt: img.src
        })
    }

    useEffect(() => {
        getImg()
    }, [])

    return (
        <section>
            <Image src={img.src} alt={img.alt}/>
            <Button title='Generate Image' onClick={() => getImg()}/>
        </section>
    )
}

export default DogPicsRenderer;