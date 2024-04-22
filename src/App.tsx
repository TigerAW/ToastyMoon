import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=by4SYYWlhEs" target="_blank">
          <img src="https://media.discordapp.net/attachments/1218511095103356970/1232064502883680356/Screenshot_20240422_212109_Blue_Kik.jpg?ex=662818fc&is=6626c77c&hm=dd527455753549d43a68ccf0e4bd104f0e5265b8a09fe249184e50f845e2cca2&=&format=webp&width=1365&height=934" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Who is this clown?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Learning React + Typescript
        </p>
      </div>
      <p className="read-the-docs">
        Click the clown for the best song
      </p>
    </>
  )
}

export default App
