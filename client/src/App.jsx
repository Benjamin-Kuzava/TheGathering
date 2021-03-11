import { ThemeProvider } from "@material-ui/styles";
import { useMemo, useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MainContainer from "./containers/MainContainer/MainContainer";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { UserContext } from "./utilities/UserContext";
import { theme } from "./components/shared/Theme";

function App() {
  const [toggleFetch, setToggleFetch] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const providerValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser]
  );
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  return (
    <UserContext.Provider value={providerValue}>
      <ThemeProvider theme={theme}>
        <Layout handleLogout={handleLogout}>
          <Switch>
            <Route path="/login">
              <SignIn handleLogin={handleLogin} />
            </Route>
            <Route path="/register">
              <SignUp handleRegister={handleRegister} />
            </Route>
            <Route path="/">
              <MainContainer
                toggleFetch={toggleFetch}
                setToggleFetch={setToggleFetch}
              />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
