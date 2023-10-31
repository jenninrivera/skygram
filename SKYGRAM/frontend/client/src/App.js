import {useEffect, useState} from 'react'
import Login from './components/Login';
import HomePage from './components/HomePage'



function App() {
  const [profile, setProfile] = useState([])
  const [feed, setFeed] = useState([])

  useEffect(() => {
    fetch('/check_login')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(data => setProfile(data))
      }
    })
  }, [])

  useEffect(() => {
    //fetch('http://127.0.0.1/feed')
    fetch('/feed')
    .then(response => {
      if (response.ok) {
        console.log(response)
        // response.text()
        // .then(data => {console.log(data)})
        response.json()
        .then(data => setFeed([...data].sort().reverse()))
      }
    })
  }, [])

  return (
    <div className="app">
      {/* {profile ?  */}
      <HomePage feed={feed} /> 
      {/* : <Login />} */}
    </div>
  );
}

export default App;
