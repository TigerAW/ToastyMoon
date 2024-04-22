import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=by4SYYWlhEs" target="_blank">
          <img src="https://cdn.discordapp.com/attachments/1218511095103356970/1232070587166363811/RDT_20240416_022327739478396875606506.jpg?ex=66281ea6&is=6626cd26&hm=984d9c0fad948d9e1b4116e72c7b375900de823abc0ca72716bc7e0fb79e17e3&" className="logo" alt="Vite logo" height="1000"/>
        </a>
      </div>
      <h1>Who is this clown?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Personal Project For Learning React + Typescript
        </p>
      </div>
      <p className="read-the-docs">
        Click the clown for the best song
      </p>
    </>
  )
}

export default App
