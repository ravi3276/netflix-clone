import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './screens/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
   const unsubscribe =auth.onAuthStateChanged((authUser)=>{
     if(authUser){
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
        }))
      }
      else{
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])
  return (
    <div className="app">

      <Router>
        {
          !user ? (
            <LoginScreen />
          ):(
            <Switch>
              <Route path="/profile">
                <Profile />
            </Route>

            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
          )
        }
        </Router>
    </div>
  );
}

export default App;
