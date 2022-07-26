import { useEffect } from 'react'

const WindowEvent = () => {
    const doubleClick = () => alert('Double Click')

    useEffect(() => {
      window.addEventListener('dblclick', doubleClick)
    
      return () => window.removeEventListener('dblclick', doubleClick)
    }, [])
    

    return (
        <h5>Double Click Is Active</h5>
    )
}
export default WindowEvent