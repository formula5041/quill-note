import { useState } from 'react'
import reactLogo from './assets/react.svg'
// UI modules
import { Grid } from '@nextui-org/react';
import { IoMdSave } from "react-icons/io";

import Button from './components/nextui/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const saveFunc = () =>{
    console.log('Content is saved!')
    setCount((count) => count + 1)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Quill Note</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} justify="center" alignItems="center">
            <Button
              shadow={true}
              size="md"
              color="success"
              icon={<IoMdSave size={24}/>}
              iconName={count}
              clickHandler={saveFunc}
            />
          </Grid>
        </Grid.Container>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
