import { useEffect, useState } from "react";
import Button from "../components/Button"

const ScoreKeeper = () => {
    const [score,setScore] = useState(parseInt(localStorage.getItem('score')) || 0)

    useEffect(() => {
      localStorage.setItem('score', score)
    }, [score])
    
    return (
        <section>
            <h5>Your Score is: {score}</h5>
            <br/>
            <Button onClick={() => setScore(score - 1)} title='-'/>
            <Button onClick={() => setScore(score + 1)} title='+'/>
        </section>
    )
}

export default ScoreKeeper;