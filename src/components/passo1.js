import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo } from '../actions';
import { ADD_MODELO } from '../actions/actionTypes';

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
        <>
        <h2>Escolha o modelo - Passo {currentStep}</h2>
        <div>  
        <ul>        
          {carros.map((car, index) => <div className='row'><a className='card'>
          <li key={car.id} className={`${selecionado === index && 'selecionado'}`}>
          <h2>{car.id} - {car.nome}</h2>
          <button onClick={() => {addModelo(car); handleClick(index);}}>Escolher</button>
          <img src={require(`../assets/images/${car.imagem}`)} alt="Carro" />	
          </li></a></div>)}        
        </ul>        
        </div>
        <style jsx>{`
      ul {
          text-align: center;
          list-style:none;
      }
      .selecionado {
        background-color: #067df7;
      }
      h1 { text-align: center; }
      .row {
        max-width: 220px;
        margin: 40px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 640px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
    `}</style>
      </>
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