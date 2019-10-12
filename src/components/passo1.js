import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo } from '../actions';
import { ADD_MODELO } from '../actions/actionTypes';
import '../index.css'

function Passo1(props) {
  const [carros, setCarros] = useState(props.carros);
  const [currentStep, setCurrentStep] = useState(props.currentStep);
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
    setCarros(props.carros);
    setCurrentStep(props.currentStep);    
  }, [props]);  

function addModelo(modelo) {    
  props.addModelo(modelo);
  return { type: ADD_MODELO, modelo }
}  

function handleClick(index) {
  let activeIndex = selecionado === index ? null : index;
  setSelecionado(activeIndex);
}
    if (currentStep !== 1) {
      return null
    } 
    return(
        <div className='controlePagina'>
        <div>  
          {carros.map((car, index) => <div className='row'><a className='card'>
          <div key={car.id} className={`${selecionado === index && 'selecionado'}`}>
          <h2>{car.nome}</h2>
          <img src={require(`../assets/images/${car.imagem}`)} alt="Carro"  className="imgCarro"/>	
          <button onClick={() => {addModelo(car); handleClick(index);}} className="btn btnCarro">Escolher</button>          
          </div></a></div>)}        
          </div>
      </div>
    );
  }
  const mapStateToProps = store => ({
    modelo: store.modelo,
  });
   
 const mapDispatchToProps= (dispatch)=>{
    return{
      addModelo: (modelo)=>{dispatch(addModelo(modelo))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo1);