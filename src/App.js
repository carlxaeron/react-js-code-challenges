
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Test1 from './01-color-renderer/ColorRenderer';
import Test2 from './02-dark-mode/DarkMode';
import Test3 from './03-form-validator/FormValidator';

function App() {
  const [darkMode,setDarkMode] = useState(false)

  return (
    <div className={`wrapper ${darkMode ? 'dark' : 'light'}`}>
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
        <Test1/>
        <Test2 isDark={darkMode} setDarkMode={setDarkMode}/>
        <Test3/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
