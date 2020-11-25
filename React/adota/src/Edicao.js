import React, {useState, useEffect} from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import Store from './Store';


export function minLengthValidation(minLength, value) {
  if (value.trim().length < minLength) {
    return `Este campo requer pelo menos ${minLength} caracteres`
  }
  return null
}

export function requiredValidation(value) {
  if (value.trim() === '') {
    return 'Este campo é obrigatório'
  }
  return null
}

const validate = {
  info: (value) => minLengthValidation(3, value),
  nome: requiredValidation,
}

export default function Edicao(props) {

    const [show, setShow] = useState(props);
    const [nome, setNome] = useState(props.nome);
    const [info, setInfo] = useState(props.info);
    const [id, setID] = useState(props.id);
    const [img, setImg] = useState(props.img);
    const [nameError, setNameError] = useState("");
    const [nameInfo, setNameInfo] = useState("");
    const [valid, setValid] = useState("valido");

    const {callbackFunctionEditar} = props;
  
    const handleClose = () => setShow(false); 

    function sendData () {
      callbackFunctionEditar();
    }

    const {
      updateDog,
    } = Store()

    function handleChange(event) {
        setNome(event.target.value)
        onBlur(event);
    }

    function handleChangeInfo(event) {
        setInfo(event.target.value)
        onBlur(event);
    }

      const handleCadastrou = (event) =>{
         const dog = {"nome": nome, "info": info, "img": img}
         updateDog(dog, id);
         setShow(false);
         sendData();

        } 
      
        function onBlur(event) {
          const value  = event.target.value
          const name  = event.target.name
          const error = validate[name] ? validate[name](value) : null
          
              if(error != null){
                if(name == "nome"){
                  setNameError(error)
                }else if(name == "info"){
                  setNameInfo(error)
                }
              }

              if(error != null){

                setValid("invalido")
  
                }else if(error === null){
                  if(name === "nome" && nameError !== ""){
                    setNameError("");
                  }else if(name === "info" && nameInfo !== ""){
                    setNameInfo("");
                  }
                }
  
                if(nameError === "" && nameInfo === ""){
                  setValid("valido")
                }
        }
        
    return (
      <> 
        <Modal show={show.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edição do Doguinho</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Control name = "nome" onChange={handleChange} value={nome} onBlur={onBlur} placeholder={nome} />
            <br/>
            <div className="error" style={{color: "red"}}>{nameError}</div>
            <br/>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control name = "info" onChange={handleChangeInfo} value={info} onBlur={onBlur} as="textarea" rows="5"  placeholder={info}/>
            <br/>
            <div className="error" style={{color: "red"}}>{nameInfo}</div>
            <br/>
            </Form.Group>
          </Form>    
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button disabled = {valid != "valido"} variant="primary" onClick={handleCadastrou}>
              Editar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  Edicao.propTypes = {
    show: PropTypes.bool.isRequired,
    nome: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    callbackFunctionEditar: PropTypes.func.isRequired,
  };