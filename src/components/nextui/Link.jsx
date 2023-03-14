import { Link } from "@nextui-org/react";

const App = (props) => {
  return (
    <>
      <Link
        color={props.color}
        href={props.href}
        underline={props.underline}
        block={props.block}
        onClick={props.clickHandler}
        css={props.css}
      >
        {props.text}
      </Link>
    </>
  )
}

export default App