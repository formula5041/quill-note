import { useState } from 'react'
// UI modules
import { Grid } from '@nextui-org/react';
import { IoMdSave } from "react-icons/io";
// components
import Button from './components/nextui/Button'
import Text from './components/nextui/Text'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const saveFunc = () =>{
    setCount((count) => count + 1)
  }

  return (
    <section className="section-search">
      <Text
        text="Searching Quill"
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
            css={{
              background: '$white',
              fontWeight: '$semibold',
              boxShadow: '$md',
              position: 'relative',
              overflow: 'visible',
              color: '#0F9549',
              px: '$18',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: '$white',
                opacity: 1,
                borderRadius: '$pill',
                transition: 'all 0.4s ease'
              },
              '&:hover': {
                transform: 'translateY(-5px)',
                '&:after': {
                  transform: 'scaleX(1.5) scaleY(1.6)',
                  opacity: 0
                }
              },
              '&:active': {
                transform: 'translateY(-2px)'
              }
            }}
          />
        </Grid>
      </Grid.Container>
    </section>
  )
}

export default App
