
import { AiOutlineSearch } from "react-icons/ai";
import Text from '../nextui/Text'
import Input from '../nextui/Input'

function App() {
  return (
    <>
      <Text
        text="Find Your Favorite Things!"
        size={70}
        css={{
          textGradient: "45deg, $blue600 -20%, $green800 80%",
          marginBottom: "10px",
        }}
      />
      <Input
        rounded
        labelLeft={<AiOutlineSearch size={24}/>}
        placeholder="Search"
        size="xl"
        css={{
          textAlign: "start",
          width: "50%",
          marginTop: "20px",
        }}
        clearable={true}
      />
      <Text
        text="Try to searching some topic of technology..."
        size={24}
        css={{
          color:"#5F8C85",
          marginBottom: "10px",
        }}
      />
    </>
  )
}

export default App
