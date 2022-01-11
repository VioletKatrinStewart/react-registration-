import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import Auth from './views/Auth';
import frog from './frog.jpeg';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>I am Signed In</h1>
                <img src={frog} alt="frog" />
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
