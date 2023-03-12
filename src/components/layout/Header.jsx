import './Header.css'
import Text from '../nextui/Text'
import Logo from '../Logo'

const App = () =>{
  return (
    <div className="header">
      <Logo/>
      <Text
        text="Quill Note"
        size={40}
        css={{
          color: "white",
          margin: 0,
        }}
      />
    </div>
  )
}

export default App