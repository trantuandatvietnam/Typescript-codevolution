type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
  // Loại trừ thằng "center-center ra khỏi props position"
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification position - {position}</div>;
};

export default Toast;
