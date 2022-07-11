import React from 'react'
import users from './users.json'
import Card from './components/Card'
import './styles/global.css'

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>The wall</h1>
        <section>
        {users.map((user, key ) => (
          <Card key={key} picture={user.picture} name={user.name} about={user.about}/>
    ))}
        </section>
        
      </main>
    )
  }
}

export default App 