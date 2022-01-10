import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/signin"> Sign In </NavLink>
        <NavLink to="/signup"> Sign Up </NavLink>
        <Switch>
          <Route path="/" exact>
            {currentUser && <h1>I am signed in</h1>}
            {!currentUser && <h1>I am NOT signed in</h1>}
          </Route>
          <Route path="/signin" exact></Route>
          <Route path="/signup" exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
