import { ComponentProps } from "react";
import Greet from "../components/Greet";

const CustomComponent = (props: ComponentProps<typeof Greet>) => {
  return <div>{props.isLoggin}</div>;
};

export default CustomComponent;
