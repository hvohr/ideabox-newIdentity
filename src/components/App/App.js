import './App.css';
import React, { useState } from 'react'
import Header from '../Header/Header'
import IdentityCard from '../IdentityCard/IdentityCard'

function App() {
  const [identity, setIdentity] = useState([])
  function getIdentity() {
    fetch(`https://randomuser.me/api/`)
      .then(response => response.json())
      .then(data => setIdentity(data.results))
  }
  let userData = identity.map(user => <IdentityCard
    firstName={user.name.first}
    lastName={user.name.last}
    birthCity={user.location.city}
    birthCountry={user.location.country}
    phone={user.phone}
    email={user.email}
    birthday={user.dob.date}
    id={user.login.md5} />
  )
  return (
    <div className='App'>
      <Header />
      <main className="main-container">
        <button className="generate-button" onClick={getIdentity}>Get New Identity</button>
        {!identity.length && <h2 className="empty-line">In some trouble? Need some new personal information? Click the button above to generate!</h2>}
        {userData}
      </main>
    </div>
  );
}

export default App;
