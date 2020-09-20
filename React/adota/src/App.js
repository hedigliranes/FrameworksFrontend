import React, {useEffect, useState} from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, NavbarBrand, Button, Row, Col } from 'react-bootstrap';
import Cards from './Cards'
import SignUp from './SignUp'

export default class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      dogs: [
        {"nome": "Bob", "info": "Cachorro amigavel !"},
        {"nome": "Billy", "info": "Me adota pf"}
      ],
    }
  }

  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  callbackFunction = (childData) => {
    const aux = this.state.dogs;
    aux.splice(childData, 1);
    this.setState({dogs: aux});
  }


  cadastro = (nome, info) => {
    const aux = this.state.dogs;
    console.log(nome.value, " " , info.value);
    aux.push({"nome": nome.value, "info": info.value});
    this.setState({dogs: aux});
  }

  render(){

    const cards = (
        this.state.dogs.map((element, index) =>
          <Col md="4" key={index}>
            <Cards
            id = {index}
            nome = {element.nome}
            info = {element.info}
            parentCallback = {this.callbackFunction}
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
          <Button variant="primary" onClick={e => {
              this.showModal();
         }}>Cadastre seu doginho</Button>
        </p>
      </header>

      <div>
        <Row>
        {cards}
        </Row>
      </div>

        { this.state.show == true ?
          <SignUp show={this.state.show} cadastro={this.cadastro}/>
          : null
          }

    </div>
  )
}

}