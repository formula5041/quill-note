import { useState } from 'react'
// UI modules
import { Grid } from '@nextui-org/react';
import { IoMdSave } from "react-icons/io";
// components
import Button from './components/nextui/Button'
import Text from './components/nextui/Text'
import Header from './components/layout/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const saveFunc = () =>{
    setCount((count) => count + 1)
  }

  return (
    <div className="App">
      <Header/>
      {/* <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={atomLogo} className="logo" alt="atom logo" />
        </a>
      </div> */}
      <Text
        text="Quill Note"
        size={70}
        css={{
          textGradient: "45deg, $blue600 -20%, $green800 80%",
          margin: 0,
        }}
      />
      <Grid.Container gap={2} justify="center">
        <Grid justify="center" alignItems="center">
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
      <p className="read-the-docs">
        Click on the atom logos to learn more...
      </p>
    </div>
  )
}

export default App
