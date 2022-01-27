type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// <T extends string | number> Nếu kiểu T chỉ là string hoặc number
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
