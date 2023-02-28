import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({})


  const changeData = () => {
    const postData = JSON.stringify({
      lastModified: Date.now(),
      serverText: "Im client!"
    })
  
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: postData
    };
    // console.log(options)
    fetch("/api/setAll", options)
        // .then(res => res.json())
        // .then(resData => console.log(resData))
        // .catch(err => console.log(err))
  }


 // const postData = JSON.stringify({})

  const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    //body: postData
  };

  fetch("/api/fechAll", options)
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => console.log(err))

  return (
    <div className="App">
      <h1>Vite + React + Express</h1>
      <div className="card">
        <h2>Server data</h2>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>

        <button onClick={changeData}>Change data</button>
      </div>
    </div>
  )
}

export default App
