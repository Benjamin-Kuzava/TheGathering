import { useMemo, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MainContainer from "./containers/MainContainer/MainContainer";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import { loginUser } from "./services/auth";
import { UserContext } from "./utilities/UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const providerValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser]
  );
  const history = useHistory();

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push("/");
  };

  return (
    <Layout>
      <Switch>
        <UserContext.Provider value={providerValue}>
          <Route path="/login">
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </UserContext.Provider>
      </Switch>
    </Layout>
  );
}

export default App;
