import React, {useState, useEffect} from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import PropTypes from "prop-types";

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

export default function SignUp(props) {

    const [show, setShow] = useState(props);
    const [nome, setNome] = useState('');
    const [info, setInfo] = useState('');
    const [img, setImg] = useState('');
    const [erros, setErros] = useState(2);
    const [nameError, setNameError] = useState(" ");
    const [nameInfo, setNameInfo] = useState(" ");

    const {cadastro} = props;
    


 useEffect(() => {
    var xhr = new XMLHttpRequest();
    var json_obj;
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          json_obj = JSON.parse(xhr.responseText);
          setImg(json_obj.message);
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
 }, [])
  
    const handleClose = () => setShow(false); 

    function handleChange(event) {
        setNome({value: event.target.value})
    }

    function handleChangeInfo(event) {
        setInfo({value: event.target.value})
    }

      const handleCadastrou = (event) =>{

         cadastro(nome, info, img);
         setShow(false);

        } 
      
        function onBlur(event) {
          const value  = event.target.value
          const name  = event.target.name
          const error = validate[name] ? validate[name](value) : null
          
          if(erros > 0){

              if(error != null){
                if(name == "nome"){
                  setNameError(error)
                }else if(name == "info"){
                  setNameInfo(error)
                }
              }

              if(error != null && erros < 2){
                  setErros(erros + 1);
              }else if(error === null){
                if(name == "nome" && nameError != ""){
                  setErros(erros - 1);
                  setNameError("")
                }else if(name == "info" && nameInfo != ""){
                  setErros(erros - 1);
                  setNameInfo("")
                }
              }
          }else if(erros === 0){
              if(error != null){
                setErros(erros + 1);
                if(name == "nome"){
                  setNameError(error)
                }else if(name == "info"){
                  setNameInfo(error)
                }
            }
          }
          console.log(error)
          console.log(erros)
        }
        
    return (
      <> 
        <Modal show={show.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro do Doguinho</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Control name = "nome" onChange={handleChange} onBlur={onBlur} placeholder="Nome" />
            <br/>
            <div className="error" style={{color: "red"}}>{nameError}</div>
            <br/>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control name = "info" onChange={handleChangeInfo} onBlur={onBlur} as="textarea" rows="5"  placeholder="Fale sobre ele"/>
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
            <Button disabled = {erros > 0} variant="primary" onClick={handleCadastrou}>
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