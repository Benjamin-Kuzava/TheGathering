import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import MainContainer from "./containers/MainContainer/MainContainer";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
