import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const members = [
    {name: 'Eric', email: 'Eric@fakemail.com', role: 'Backend Engineer'},
    {name: 'Bobby', email: 'Bobby@fakemail.com', role: 'Frontend Engineer'},
    {name: 'Lisa', email: 'Lisa@fakemail.com', role: 'Backend Engineer'},
  ]

  const [allMembers, setAllMembers] = useState(members);

  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
