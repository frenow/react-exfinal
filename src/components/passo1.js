import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo } from '../actions'; 
import { ADD_MODELO } from '../actions/actionTypes';

function Passo1(props) {
  const [carros, setCarros] = useState(props.carros);
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    setCarros(props.carros);
    setCurrentStep(props.currentStep);    
  }, [props]);  

function addModelo(modelo) {    
  console.log('add modelo '+modelo.nome); 
  props.addModelo(modelo);
  return { type: ADD_MODELO, modelo }
}  

    if (currentStep !== 1) {
      return null
    } 
    return(
        <>
        <h2>Escolha o modelo - Passo {currentStep}</h2>
        <div>  
        <ul>        
          {carros.map(car => <div className='row'><a className='card'><li key={car.id}>
          <h2>{car.id} - {car.nome}</h2>
          <button onClick={() => addModelo(car)}>Escolher</button>
          <img src={require(`../assets/images/${car.imagem}`)} alt="Carro" />	
          </li></a></div>)}
        
        </ul>        
        </div>
        <style jsx>{`
      ul {
          text-align: center;
          list-style:none;
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
    modelo: store.modelo
  });
   
 const mapDispatchToProps= (dispatch)=>{
    return{
        addModelo: (modelo)=>{dispatch(addModelo(modelo))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo1);