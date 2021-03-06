import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utilities/UserContext";

const Login = (props) => {
  const { currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
      <p>{currentUser?.username}</p>
      <label htmlFor="username">Login:</label>
      <input
        id="username"
        value={username}
        onChange={handleChange}
        type="text"
        name="username"
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        value={password}
        onChange={handleChange}
        type="password"
        name="password"
      />
      <br />
      <Link to="/register">Register</Link>
      <button>Submit</button>
    </form>
  );
};

export default Login;
