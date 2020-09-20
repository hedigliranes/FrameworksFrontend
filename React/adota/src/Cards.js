import './App.css';
import { Button, Card } from 'react-bootstrap';
import React from 'react';
import Details from './Details';

export default class Cards extends React.Component {

  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  sendData = (e) => {
    this.props.parentCallback(e);
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
          </Card.Body>
          </Card>
          { this.state.show == true ?
          <Details show={this.state.show}
          nome={this.props.nome}
          id={this.props.id}
          info={this.props.info}
          adotou={this.sendData}/>
          : null
          }
        </div>
      )
    }
  }
