const DarkMode = ({ isDark, setDarkMode }) => {
    return (
        <section>
            <button onClick={() => setDarkMode(!isDark)}>Dark: { isDark ? 'ON' : 'OFF' }</button>
        </section>
    )
}

export default DarkMode;