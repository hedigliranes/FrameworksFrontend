import React, {useEffect, useState} from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, NavbarBrand, Button, Row, Col } from 'react-bootstrap';
import Cards from './Cards'
import SignUp from './SignUp'
import Store from './Store'

export default function App(){

    const [show, setShow] = useState(false);
    const [change, setChange] = useState(false);

    let dogs = Store();

    function showModal() {
        setShow(!show);
    };

    function callbackFunction(){
      setChange(!change);
    }

  // edicao = (nome, info, id) => {
  //   let aux = this.state.dogs;
  //   aux[id].nome = nome;
  //   aux[id].info = info;
  //   this.setState({dogs: aux});  
  // }


  // cadastro = (nome, info, img) => {
  //   const aux = this.state.dogs;
  //   aux.push({"nome": nome.value, "info": info.value, "img": img});
  //   this.setState({dogs: aux});
  // }
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
              showModal();
         }}>Cadastre seu doginho</Button>
        </p>
      </header>

      <div>
        <Row>
        {dogs.dogs.length > 0 ? 
                dogs.dogs.map((element, index) =>
                <Col md="4" key={index}>
                  <Cards
                  id = {index}
                  nome = {element.nome}
                  info = {element.info}
                  parentCallback = {callbackFunction}
                  //edicao = {this.edicao}
                  img = {element.img}
                  />
                </Col>) :
                 null}
        </Row>
      </div>

        { show == true ?
          <SignUp show={show} parentCallback = {callbackFunction}/>
          : null
          }
    </div>
  )

}