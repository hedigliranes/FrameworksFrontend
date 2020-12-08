import React, {useState, useEffect} from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import Store from './Store'
import { useHistory } from 'react-router-dom'
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

export default function SignUpRoute(props) {
    const history = useHistory()

    const [show, setShow] = useState(props);
    const [nome, setNome] = useState('');
    const [info, setInfo] = useState('');
    const [img, setImg] = useState('');
    const [nameError, setNameError] = useState(" ");
    const [nameInfo, setNameInfo] = useState(" ");
    const [valid, setValid] = useState("invalido");

    const {parentCallback} = props;
    


  const {
    createDog,
  } = Store()


  function sendData () {
    parentCallback();
    history.goBack()

  }


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
  
    const handleClose = () =>{
        history.goBack()
      }; 

    function handleChange(event) {
        setNome({value: event.target.value})
        onBlur(event);
    }

    function handleChangeInfo(event) {
        setInfo({value: event.target.value})
        onBlur(event);

    }

      const handleCadastrou = (event) =>{
         createDog(nome, info, img);
         sendData ()
         setShow(false);

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
          <h3> Formulário de Cadastro</h3>
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
            <Button style={{float: "right",   marginLeft: "5%"}} variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button style={{float: "right"}} disabled = {valid != "valido"} variant="primary" onClick={handleCadastrou}>
              Cadastrar
            </Button>
      </>
    );
  }

  SignUpRoute.propTypes = {
    show: PropTypes.bool.isRequired,
    parentCallback: PropTypes.func.isRequired,
  };