import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';
import Orders from './Components/Orders/Orders';
import AddBooks from './Components/AddBooks/AddBooks';
import ManageBooks from './Components/ManageBooks/ManageBooks';


export const UserContext = createContext()

function App() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
    <Router>
      <Switch>
      
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/home'>
          <Home></Home>          
        </Route>
        
        <Route path='/login'>
          <Login></Login>          
        </Route>

        <PrivateRoute path='/orders'>
          <Orders />          
        </PrivateRoute>

        <PrivateRoute exact path='/admin'>
          <AdminPanel />          
        </PrivateRoute>

        <PrivateRoute path='/checkout/:bookId'>
          <Checkout />          
        </PrivateRoute>

        <PrivateRoute path='/admin/managebooks'>
          <ManageBooks />          
        </PrivateRoute>

        <PrivateRoute path='/admin/addbooks'>
          <AddBooks />          
        </PrivateRoute>

        <Route path='*'>
          <Home></Home>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
