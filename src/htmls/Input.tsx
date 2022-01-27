import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

const Input = (props: InputProps) => {
  return <input {...props} type="text" />;
};

export default Input;
