import { Image } from "@nextui-org/react";

const App = (props) => {
  return (
    <Image
      width={320}
      height={180}  
      src={props.src}
      alt="Default Image"
      objectFit="cover"
    />
  );
}

export default App