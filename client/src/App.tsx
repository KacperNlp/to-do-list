import React, { useEffect, useState } from 'react';

import './App.css';

interface DatabaseInterface {
}

const App = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(res => {
        setBackendData(res.users);
      }).catch(err => {
        if(err) throw new Error('We cannot get data from database!');
      })
  }, [])

  if(!backendData.length) {
    return <p>Sorry we have problem with database!</p>
  }

  const taksList = typeof backendData === 'undefined' ? <p>Loading...</p> : backendData.map((user, id) => (
    <p key={id}>{user}</p>
  ))

  return ( 
    <div className="App">
      { taksList }
    </div>
   );
}

export default App;
