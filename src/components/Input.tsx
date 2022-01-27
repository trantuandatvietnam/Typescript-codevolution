import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return <input type="text" value={props.value} onChange={handleInputChange} />;
};

export default Input;
