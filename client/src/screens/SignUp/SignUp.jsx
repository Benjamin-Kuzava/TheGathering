import React, { useContext } from "react";
import { UserContext } from "../../utilities/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1>sign up</h1>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
};

export default SignUp;
