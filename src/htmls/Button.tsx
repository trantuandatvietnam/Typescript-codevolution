import { ComponentProps } from "react";

type CustomButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;
// Loại bỏ loại ComponentProps của thằng children nên lúc này children không thể cho là một phần tử html được

const CustomButton = ({ variant, children, ...rest }: CustomButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
