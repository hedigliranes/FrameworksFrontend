import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from "prop-types";


export default function Details(props) {

    const [show, setShow] = useState(props);
    const [nome, setNome] = useState(props);
    const [info, setInfo] = useState(props)
    const [id, setId] = useState(props);

    const {adotou} = props;
  
    const handleClose = () => setShow(false); 

    const handleAdotou = () =>{
         adotou(id.id);
         setShow(false);
        } 
        
    return (
      <> 
        <Modal show={show.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{nome.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{info.info}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdotou}>
              Adotar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  Details.propTypes = {
    show: PropTypes.bool.isRequired,
    nome: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    adotou: PropTypes.func.isRequired,
  };