import React, {useEffect, useState} from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, NavbarBrand, Button, Row, Col } from 'react-bootstrap';
import Cards from './Cards'

export default class App extends React.Component{

  dogs = [
    {"nome": "Bob", "raca": "Pastor Alemão"},
    {"nome": "Billy", "raca": "Bulldog"}
  ];

  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  render(){

    const cards = (
        this.dogs.map(element =>
        <Col md="4">
          <Cards
        nome = {element.nome}
        raca = {element.raca}
        />
        </Col>
        )
    )
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

      <div>
        <Row>
        {cards}
        </Row>
      </div>

    </div>
  )
}

}