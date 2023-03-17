import { Button, Spacer } from '@nextui-org/react';

export default function App(props) {
  let spacerX = props.spacerX === true ? <Spacer x={1}/> : null
  let spacerY = props.spacerY === true ? <Spacer y={1}/> : null
  return (
    <>
      <Button
        bordered={props.bordered} // Boolean
        rounded={props.rounded} // Boolean
        shadow={props.shadow} // Boolean
        size={props.size} // String md lg ...
        color={props.color} //  String success warngin
        icon={props.icon} // Tag <IoBook size={24}/>
        onPress={props.clickHandler} // Function
        css={props.css} // Object
      >{props.iconName}</Button>
      {spacerX}
      {spacerY}
    </>
  );
}
