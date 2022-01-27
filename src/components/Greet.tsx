type GreetProps = {
  name: string;
  messageCount: number;
  isLoggin?: boolean;
};

const Greet = (props: GreetProps) => {
  const { isLoggin = false } = props;
  return (
    <div>
      <h2>
        {isLoggin
          ? "Welcome {props.name} to the TS: Your have {props.messageCount} messages!"
          : "Welcome Gues"}
      </h2>
    </div>
  );
};

export default Greet;
