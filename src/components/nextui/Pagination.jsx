import { Pagination } from "@nextui-org/react";

export default function App(props) {
  return (
    <Pagination 
      total={props.count} 
      initialPage={1} 
      color={props.color}
    />
  );
}
