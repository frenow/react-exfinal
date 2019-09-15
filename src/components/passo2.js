import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addCarro } from '../actions'; 
import {Link} from 'react-router-dom';

function Passo2(props) {
  const [carros, setCarros] = useState(props.carros);
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    setCarros(props.carros);
    setCurrentStep(props.currentStep);    

  }, [props]);  

    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <>
      <h2>Escolha a versão - Passo {props.currentStep}</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
          />
      </div>
      </>
    );
  }
  const mapStateToProps = store => ({
    carro: store.carro
  });
   
 const mapDispatchToProps= (dispatch)=>{
    
    return{
        addCarro: (carro)=>{dispatch(addCarro(carro))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo2);