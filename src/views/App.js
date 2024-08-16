import logo from "./logo.svg";
import "./App.scss";
import "./todos/Todo.scss";
import { ToastContainer, toast } from "react-toastify";
import Job from "./jobs/Job";
import Todo from "./todos/Todo";
import Home from "./homes/Home";
import Nav from "./nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <Todo />
            </Route>
            <Route path="/jobs">
              <Job />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
      </div>
    </Router>
  );
}

export default App;
