// import './App.css';
import {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed'

function App() {
  const [profile, setProfile] = useState([])
  const [feed, setFeed] = useState([])

  // useEffect(() => {
  //   fetch('/check_login')
  //   .then(response => {
  //     if (response.ok) {
  //       response.json()
  //       .then(data => setProfile(data))
  //     }
  //   })
  // }, [])

// useEffect (() => {
//   fetch('/feed')
//   .then(response.ok)
// })

  return (
    <div className="App">
      <Switch>
        <Route path='/feed'>
          <Feed />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route exact path=''>
          <Login />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
