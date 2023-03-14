import './Header.css'
import Text from '../nextui/Text'
import Logo from '../Logo'
import Button from '../nextui/Button'
import confetti from 'canvas-confetti';

const App = () =>{
  const tabsInfo = [
    {name:"Articles"},
    {name:"About"},
    {name:"Donate"},
  ]
  const handler = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    })
  }
  return (
    <header className="header">
      <Logo/>
      <Text
        text="Quill Note"
        size={30}
        css={{
          color: "white",
          margin: 0,
        }}
      />
      <div className='nav-items'>
        {tabsInfo.map((tab,index)=>
          <Button
            key={index}
            size={10}
            color={'success'}
            iconName={tab.name}
            clickHandler={handler}
            css={{
              padding: '6px',
              background: '#00000050',
            }}
          />
        )}
      </div>
    </header>
  )
}

export default App