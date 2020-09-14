import React from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, NavbarBrand, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

    <Navbar>
      <NavbarBrand href="#home" className="logo">
        <img
          src={logo}
          width="250"
          height="150"
          className="d-inline-block"
          alt="React Bootstrap logo"
        />
      </NavbarBrand>
    </Navbar>
    <br />
      <header className="App-header">
          <p >
          Plataforma dedica a fazer os doguinhos mais felizes !!!!
          <br></br>
          <Button variant="primary">Adote</Button>{' '}
        </p>
      </header>
    </div>
  );
}

export default App;
