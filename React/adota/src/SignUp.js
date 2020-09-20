import React, {useState} from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import PropTypes from "prop-types";

export default function SignUp(props) {

    const [show, setShow] = useState(props);
    const [nome, setNome] = useState(null);
    const [info, setInfo] = useState(null);
    const {cadastro} = props;

  
    const handleClose = () => setShow(false); 

    function handleChange(event) {
        setNome({value: event.target.value})
    }

    function handleChangeInfo(event) {
        setInfo({value: event.target.value})
    }

    const handleCadastrou = () =>{
         cadastro(nome, info);
         setShow(false);

        } 
        
    return (
      <> 
        <Modal show={show.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro do Doguinho</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Control onChange={handleChange} placeholder="Nome" />
            <br/>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control onChange={handleChangeInfo} as="textarea" rows="5"  placeholder="Fale sobre ele"/>
            </Form.Group>
          </Form>    
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCadastrou}>
              Cadastrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  SignUp.propTypes = {
    show: PropTypes.bool.isRequired,
    cadastro: PropTypes.func.isRequired,
  };