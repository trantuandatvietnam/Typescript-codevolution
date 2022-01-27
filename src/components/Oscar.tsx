import { ReactNode } from "react";

type OscarProps = {
  children: ReactNode;
};

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
