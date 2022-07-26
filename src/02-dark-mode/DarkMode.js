import Button from './../components/Button'

const DarkMode = ({ isDark, setDarkMode }) => {
    return (
        <section>
            <Button
                onClick={() => setDarkMode(!isDark)}
                title={`Dark: ${ isDark ? 'ON' : 'OFF' }`}/>
        </section>
    )
}

export default DarkMode;