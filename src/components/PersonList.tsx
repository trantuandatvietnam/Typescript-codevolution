import { Name } from "./PersonTypes";

type PersonListProps = {
  nameList: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.nameList.map((name, index) => (
        <h2 key={index}>
          {name.firstName} {name.lastName}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
