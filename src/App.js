
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Test1 from './01-color-renderer/ColorRenderer';
import Test2 from './02-dark-mode/DarkMode';
import Test3 from './03-form-validator/FormValidator';
import Test4 from './04-dog-pics/DogPicsRenderer';
import Test5 from './05-score-keeper/ScoreKeeper';
import Test6 from './06-window-event/WindowEventRenderer';
import Test8 from './08-pixel-art/PixelArtRenderer';

function App() {
  const [darkMode,setDarkMode] = useState(false)
  const [bgColor,setBgColor] = useState(false)

  return (
    <div 
      className={`wrapper ${darkMode ? 'dark' : 'light'}`}
      style={{
        backgroundColor: darkMode ? '' : (bgColor || '')
      }}>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main>
        <Test1 setBgColor={setBgColor}/>
        <Test2 isDark={darkMode} setDarkMode={setDarkMode}/>
        <Test3/>
        <Test4/>
        <Test5/>
        <Test6/>
        <Test8/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
