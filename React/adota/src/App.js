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
      show: false,
      load: false,
      current: 0,
      dogs: [
        {"nome": "Bob", "info": "Cachorro amigavel !", "img": null},
        {"nome": "Billy", "info": "Me adota pf", "img": null}
      ],
    }
  }
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


  cadastro = (nome, info, img) => {
    const aux = this.state.dogs;
    aux.push({"nome": nome.value, "info": info.value, "img": img});
    this.setState({dogs: aux});
  }

  componentWillMount() {
    let aux = this.state.dogs;

    aux.map((element) =>{
        var xhr = new XMLHttpRequest();
        var json_obj;
        xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
        xhr.onload = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              json_obj = JSON.parse(xhr.responseText);
              element.img = json_obj.message;
              this.setState({dogs: aux});
            } else {
              console.error(xhr.statusText);
            }
          }
        }.bind(this);
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };
        xhr.send(null);
    })     
    this.setState({
      load: !this.state.load
    });
  }

  render(){
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
        {this.state.load == true ? 
                this.state.dogs.map((element, index) =>
                <Col md="4" key={index}>
                  <Cards
                  id = {index}
                  nome = {element.nome}
                  info = {element.info}
                  parentCallback = {this.callbackFunction}
                  img = {element.img}
                  />
                </Col>) : null}
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