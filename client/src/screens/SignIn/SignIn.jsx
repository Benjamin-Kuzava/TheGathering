import React, { useContext } from "react";
import { UserContext } from "../../utilities/UserContext";
import "./SignIn.css";

const SignIn = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>
      <h1>sign in </h1>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      <button
        onClick={() =>
          setCurrentUser({
            id: 2,
            username: "bob",
            email: "bob@bob.com",
          })
        }
      >
        Login
      </button>
    </div>
  );
};

export default SignIn;
