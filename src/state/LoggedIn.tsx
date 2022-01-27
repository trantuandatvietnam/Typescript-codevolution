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
