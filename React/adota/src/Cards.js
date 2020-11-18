import './App.css';
import { Button, Card } from 'react-bootstrap';
import React from 'react';
import Details from './Details';
import Edicao from './Edicao';

export default class Cards extends React.Component {

  state = {
    show: false,
    showEdit: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  }
    showModalEditar = e => {
      this.setState({
        showEdit: !this.state.showEdit
      });
  };

  sendData = (e) => {
    this.props.parentCallback(e);
  }

  editar = (nome, info, id) => {
    this.props.edicao(nome, info, id);
  }
    render() {
      return (
        <div>
          <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.nome}</Card.Title>
            <Card.Text>
              {this.props.info}
            </Card.Text>
            <Button  onClick={e => {
              this.showModal();
         }}
          > Ver Informações </Button>
          <Button style={{marginLeft: 1 + 'em'}}  onClick={e => {
              this.showModalEditar();
         }}
          > Editar </Button>
          </Card.Body>
          </Card>
          { this.state.show == true ?
          <Details show={this.state.show}
          nome={this.props.nome}
          id={this.props.id}
          info={this.props.info}
          adotou={this.sendData}/>
          : null
          },
          { this.state.showEdit == true ?
          <Edicao show={this.state.showEdit}
          nome={this.props.nome}
          id={this.props.id}
          info={this.props.info}
          editar={this.editar}/>
          : null
          }
        </div>
      )
    }
  }
