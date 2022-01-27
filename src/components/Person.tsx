import { PersonType } from "./PersonTypes";

const Person = (props: PersonType) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

export default Person;
