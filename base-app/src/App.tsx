import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          主应用
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          待添加子应用
        </a>
				<micro-app name='app1' url='http://localhost:8080/' ></micro-app>
      </header>
    </div>
  );
}

export default App;
