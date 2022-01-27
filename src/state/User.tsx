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
