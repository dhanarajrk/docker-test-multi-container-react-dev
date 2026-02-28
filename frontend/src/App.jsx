import reactLogo from './assets/react.svg'
import dockerLogo from './assets/docker-logo-blue.svg'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [backendMsg, setBackendMsg] = useState("");

  useEffect(()=>{
    fetch("http://localhost:5000/") 
    .then(res => res.text())
    .then(data => setBackendMsg(data));
  }, []);

  return (
    <>
      <div>
        <a href="https://www.docker.com/" target="_blank">
          <img src={dockerLogo} className="logo" alt="Docker logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Docker + React</h1>
      <p>Docker Multi-Container Test</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Docker and React logos to learn more
      </p>

      <p className="backend-msg">
        <span style={{color: "cyan"}}>
          Res data from backend endpoint is: " {backendMsg} "
        </span>
      </p>
    </>
  )
}

export default App