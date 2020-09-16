import './App.css';
import {  Button, Card } from 'react-bootstrap';
import React from 'react'

export default class Cards extends React.Component {
    render() {
        const options = (
        <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.nome}</Card.Title>
          <Card.Text>
            {this.props.raca}
          </Card.Text>
          <Button variant="primary">Ver Informações</Button>
        </Card.Body>
      </Card>
        )
      return (
        <div>
          {options}
        </div>
      )
    }
  }
