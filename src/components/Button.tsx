import { MouseEvent } from "react";

type ButtonProps = {
  handleClickBtn: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClickBtn(event, 2)}>
      Click me
    </button>
  );
};

export default Button;
