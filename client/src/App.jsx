import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import MainContainer from "./containers/MainContainer/MainContainer";
import { UserContext } from "./utilities/UserContext";
import { useState, useMemo } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const providerValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser]
  );

  return (
    <Layout>
      <Switch>
        <UserContext.Provider value={providerValue}>
          <Route path="/login">
            <SignIn />
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
