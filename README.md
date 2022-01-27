- Cấu trúc thư mục:
  - src
    - components
      - Greet.tsx
      - Person.tsx
      - PersonList.tsx
  - App.tsx

```tsx
// Greet.tsx
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggin: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggin
          ? "Welcome {props.name} to the TS: Your have {props.messageCount} messages!"
          : "Welcome Gues"}
      </h2>
    </div>
  );
};

export default Greet;

// Person.tsx
type PersonType = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: PersonType) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

export default Person;

// PersonList.tsx
type PersonListProps = {
  nameList: {
    firstName: string;
    lastName: string;
  }[];
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

// App.tsx
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Trần",
    lastName: "Tuấn Đạt",
  };

  const nameList = [
    {
      firstName: "Nguyễn",
      lastName: "Ngọc Mai",
    },
    {
      firstName: "Trần",
      lastName: "Hương Thảo",
    },
    {
      firstName: "Nguyễn",
      lastName: "Quỳnh Như",
    },
  ];
  return (
    <div className="App">
      <Greet name="Tuấn Đạt" messageCount={20} isLoggin={false} />
      <Person name={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
```

VD2:

- Cấu trúc thư mục:
  - src
    - components
      - Greet.tsx
      - Status.tsx
      - Heading.tsx
      - Oscar.tsx
  - App.tsx

```tsx
// Greet.tsx
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

// Status.tsx
type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data!";
  }
  return (
    <div>
      <h2>Loading...</h2>
      <h2>Data fetch successfully</h2>
      <h2>Err fetching data</h2>
    </div>
  );
};

export default Status;

// Heading.tsx
type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};

export default Heading;

// Oscar.tsx
import { ReactNode } from "react";

type OscarProps = {
  children: ReactNode;
};

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;

// App.tsx
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>
      <Greet name="hehehe" messageCount={20} />
    </div>
  );
}

export default App;
```

- VD3:
  - Sử dụng TS trong React với Event
  - Cấu trúc thư mục:
    - src
      - components
        - Button.tsx
    - App.tsx

```tsx
// Trường hợp không truyền event vào trong hàm sự kiện
// Button.tsx
type ButtonProps = {
  handleClickBtn: () => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClickBtn}>Click me</button>;
};

export default Button;

// App.tsx
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button handleClickBtn={() => console.log("Btn clicked")} />
    </div>
  );
}

export default App;

// Trường hợp có truyền event trong hàm sự kiện (Cấu trúc thư mục vẫn như thế)
// App.tsx
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        handleClickBtn={(event) => console.log("Btn clicked", event.target)}
      />
    </div>
  );
}

export default App;

// Button.tsx
import { MouseEvent } from "react";

type ButtonProps = {
  handleClickBtn: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClickBtn}>Click me</button>;
};

export default Button;

// Trường hợp muốn tryền đối số vào hàm sự kiện(Cấu trúc thư mục vẫn như thế):

// Button.tsx
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

// App.tsx
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        handleClickBtn={(event, id) =>
          console.log(`Btn clicked id:${id}`, event.target)
        }
      />
    </div>
  );
}

export default App;

// Sự kiện change trong input:

// Input.tsx
import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.onInputChange} />
  );
};

export default Input;

// App.tsx
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input
        value=""
        onInputChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export default App;

// Hoặc truyền luôn hàm xử li sự thay đôi của input ngay bên trong component đó thì fix như sau tại input component
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
```

- Kiểu của style inline trong React with Tyscript

```ts
// App.tsx
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container style={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;

// Container.tsx
import { CSSProperties } from "react";

type ContainerProps = {
  style: CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.style}>Text content goes here...</div>;
};

export default Container;
```

- Prop Types and Tips

  - Nên sử dụng cách destructuring khi nhận props
  - Cần có file riêng để chỉ định các type cho mỗi component, và có thể tái sử dụng khi cần thiết

  - Cấu trúc folder
    - src
      - components
        - Person.tsx
        - PersonList.tsx
        - PersonTypes.tsx

```tsx
// PersonTypes.tsx
export type Name = {
  firstName: string;
  lastName: string;
};

export type PersonType = {
  name: Name;
};

// Person.tsx
import { PersonType } from "./PersonTypes";

const Person = (props: PersonType) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

export default Person;

// PersonList.tsx
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
```

- useState Hook
  - Khi đã biết kiểu giá trị khởi tạo của state thì chúng ta có thể viết code như trong React with JS

```tsx
// LoggedIn.tsx
import { useState } from "react";

const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>{loggedIn ? "User is logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;
```

- useState Future Value(Kiểu dữ liệu của giá trị khỏi tạo trong state chỉ được biết trong tương lai)

```tsx
// User.tsx
import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleClickLogin = () => {
    setUser({
      name: "Trần Tuấn Đạt",
      email: "dat130902@gmail.com",
    });
  };
  const handleClickLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleClickLogout}>Logout</button>
      {user && (
        <>
          <div>User name is {user.name}</div>
          <div>Email is {user.email}</div>
        </>
      )}
    </div>
  );
};

export default User;
```

- useState Type Assertion

```tsx
import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleClickLogin = () => {
    setUser({
      name: "Trần Tuấn Đạt",
      email: "dat130902@gmail.com",
    });
  };
  return (
    <div>
      <button onClick={handleClickLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>Email is {user.email}</div>
    </div>
  );
};

export default User;
```

- useReducer Hook

```tsx
import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment: 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement: 10
      </button>
    </>
  );
};
```

- useReducer Strict Action Types
  - Trong ví dụ trên, kiểu dữ liệu của type được định nghĩa là một chuỗi, vậy nên khi chúng ta dispatch một action có type không có trong các trường hợp định nghĩa thì nó sẽ rơi vào case default
  - Xử lại như sau:

```tsx
import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment: 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement: 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
```

- useContext

  - Cấu trúc thư mục:

    - src
      - context
        - Box.tsx
        - theme.ts
        - ThemeContext.tsx
    - App.tsx

```tsx
// Box.tsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.primary.main, color: theme.primary.text }}>
      Theme Context
    </div>
  );
};

export default Box;

// theme.ts
export const theme = {
  primary: {
    main: "#3f51b5",
    text: "#ffffff",
  },
  secondary: {
    main: "#f50057",
    text: "#ffffff",
  },
};

// ThemeContext.tsx
import { createContext, ReactNode } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// App.tsx
import Box from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
```

- useContext Future Value(trong trường hợp không biết trước giá trị (value))
- Cấu trúc thư mục:
  - src
    - context
      - User.tsx
      - UserContext.tsx
  - App.tsx

```tsx
// User.tsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Trần Tuấn Đạt",
        email: "dat130902@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>Email name is {userContext?.user?.email}</div>
    </div>
  );
};

export default User;

// UserContext.tsx
import { createContext, ReactNode, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: null | AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// App.tsx
import User from "./context/User";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
```

- Tuy nhiên trong cách trên, do khởi tạo giá trị ban đầu của context là null, nên khi sử dụng chúng ta phải check xem nó có hay không thì mới được sử dụng(Có thể dùng cách này hoặc fix như sau:)
- Cũng cấu trúc file như thế:

```tsx
//  User.tsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Trần Tuấn Đạt",
      email: "dat130902@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>Email name is {userContext.user?.email}</div>
    </div>
  );
};

export default User;

// UserContext.tsx
import { createContext, ReactNode, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: null | AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

- useRef hook
  - Sử dụng useRef trong hook ta làm như sau:

```tsx
import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default DomRef;

// Nếu không sử dụng optional chaining thì code như sau:
import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default DomRef;
```

- Sử dụng useRef(có thể thay đổi giá trị nhiều lần)

```tsx
import { useEffect, useRef, useState } from "react";

const MultableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<undefined | number>(undefined);

  const stopTimer = () => {
    window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  });
  return (
    <div>
      Hook timer - {timer} -
      <button onClick={() => stopTimer()}>Stop timer</button>
    </div>
  );
};

export default MultableRef;

// Hoặc có thể sử dụng null và check nếu có dom elm này thì mới thực hiện xử lí
import { useEffect, useRef, useState } from "react";

const MultableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<null | number>(null);

  const stopTimer = () => {
    if (!interValRef.current) return;
    window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  });
  return (
    <div>
      Hook timer - {timer} -
      <button onClick={() => stopTimer()}>Stop timer</button>
    </div>
  );
};

export default MultableRef;
```

- Component Prop

```tsx
// Login.tsx
const Login = () => {
  return <div>Please login to continue</div>;
};

export default Login;

// Private.tsx
import { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Tuấn Đạt" />;
  } else {
    return <Login />;
  }
};

export default Private;

// Profile.tsx
export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile component. Name is {name}</div>;
};

export default Profile;
```

- Cách làm khác (Chuyển props trong trường hợp thấp hơn)

```tsx
// App.tsx
import Private from "./auth/Private";
import Profile from "./auth/Profile";

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;

// Profile.tsx
export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile component. Name is {name}</div>;
};

export default Profile;

// Private.tsx
import { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Tuấn Đạt" />;
  } else {
    return <Login />;
  }
};

export default Private;

// Login.tsx
const Login = () => {
  return <div>Please login to continue</div>;
};

export default Login;
```

- Generic Props
  - Đặt vấn đề: Ta có code sau:
  - Cấu trúc thư mục:
  - src
    - generic
      - List.tsx
  - App.tsx

```tsx
// List.tsx
type ListProps = {
  items: string[] | number[];
  onClick: (value: string | number) => void;
};

const List = ({ items, onClick }: ListProps) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;

// App.tsx
import List from "./genres/List";

function App() {
  return (
    <div className="App">
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[13, 3, 11, 53]} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;
```

=> Vấn đề ở đây là ở cái props items truyền vào, đôi khi nó là mảng các chuỗi, đôi khi lại là mảng các số, .... Chúng ta có thể sử dụng (vd number[] | string[]) nhưng trong tương lai, kiểu props này lại là một mảng các Object thì sao?
=> Cách xử lí là dùng Generic Props(Có thể chuyển bất kì kiểu dữ liệu gì vào trong Props)

```tsx
// List.tsx
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// <T extends string | number> Nếu kiểu T chỉ là string hoặc number
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;

// App.tsx
import List from "./generic/List";

function App() {
  return (
    <div className="App">
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[13, 3, 11, 53]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {
            first: "Tuấn",
            last: "Đạt",
          },
          {
            first: "Ngọc",
            last: "Thảo",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
```

- Khi muốn chỉ ràng buộc props có kiểu dữ liệu là một mảng các object và mỗi object phải có thuộc tính id:

```tsx
// App.tsx
import List from "./generic/List";

function App() {
  return (
    <div className="App">
      <List
        items={[
          {
            id: 1,
            first: "Tuấn",
            last: "Đạt",
          },
          {
            id: 2,
            first: "Ngọc",
            last: "Thảo",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;

// List.tsx
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
```

- Restricting Props (Giới hạn Props)

```tsx
// RandomNumber.tsx
type RandomNumberProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;

// App.tsx
import RandomNumber from "./restriction/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
```

- Vấn đề ở đây là khi chuyền props vào trong RandomNumber thì người dùng hoàn toàn có thê truyền thêm isZero hoặc isNegative (Điều này là hoàn toàn vô lí) => Chúng ta cần giới hạn Props truyền vào như sau:

```tsx
// RandomNumber.tsx
type RandomNumberType = {
  value: number;
};
// Dấu & thể hiện là nó có thể là kiểu RandomNumberType và kiểu {...}
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;

// App.tsx
import RandomNumber from "./restriction/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
```

- Template Literals and Exclude

```tsx
// App.tsx
import Toast from "./templateliterals/Toast";

function App() {
  return (
    <div className="App">
      <Toast position="center-center" />
    </div>
  );
}

export default App;

// Toast.tsx
type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
  position: `${HorizontalPosition}-${VerticalPosition}`;
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification position - {position}</div>;
};

export default Toast;
```

- Tuy nhiên, không nên dùng loại center-center ở đây, chỉ cần dùng center thôi thì ta làm như sau:

```tsx
// App.tsx
import Toast from "./templateliterals/Toast";

function App() {
  return (
    <div className="App">
      <Toast position="center" />
    </div>
  );
}

export default App;

// Toast.tsx
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
```

- Wrapping HTML Elements

```tsx
// App.tsx
import CustomButton from "./htmls/Button";

function App() {
  return (
    <div className="App">
      <CustomButton variant="primary">
        <span>Primary label</span>
      </CustomButton>
    </div>
  );
}

export default App;

// Button.tsx
import { ComponentProps } from "react";

type CustomButtonProps = {
  variant: "primary" | "secondary";
} & ComponentProps<"button">;

const CustomButton = ({ variant, children, ...rest }: CustomButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;

// Input.tsx
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

const Input = (props: InputProps) => {
  return <input {...props} type="text" />;
};

export default Input;
```

- Trong trường hợp ta chỉ muốn thằng children trong App chỉ là một chuỗi mà không phải HTML thì ta có thể làm như sau(Lúc này nhớ thay đổi children trong App.tsx chỉ được là một chuỗi):

```tsx
// Button.tsx
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
```

- Extracting a Components Prop Types (Trích xuất props của một component hiện có, lúc này customComponent sẽ có những props của Greet)

```tsx
// CustomComponent.tsx
import { ComponentProps } from "react";
import Greet from "../components/Greet";

const CustomComponent = (props: ComponentProps<typeof Greet>) => {
  return <div>{props.isLoggin}</div>;
};

export default CustomComponent;

// Greet.tsx
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
```

- Polymorphic Components(Các thành phần đa hình)

```tsx
// App.tsx
import Text from "./htmls/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="somethingId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;

// Text.tsx
import { ComponentProps, ElementType, ReactNode } from "react";

type TextOwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: ReactNode;
  as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

export default Text;
```
