import { useState } from "react";
import Button from "./../components/Button";
import WindowEvent from "./WindowEvent";

const WindowEventRenderer = () => {
    const [evt, setEvt] = useState(false)

    return (
        <section>
            <Button onClick={() => setEvt(!evt)} 
                title='Toggle Double Click Event'/>
            {evt && (
                <>
                    <br/>
                    <WindowEvent/>
                </>
            )}

        </section>
    )
}

export default WindowEventRenderer;