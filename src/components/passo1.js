import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addCarro } from '../actions'; 
import {Link} from 'react-router-dom';

function Passo1(props) {
  const [carros, setCarros] = useState(props.carros);
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    setCarros(props.carros);
    setCurrentStep(props.currentStep);    

  }, [props]);  

    if (currentStep !== 1) {
      return null
    } 
    return(
        <>
        <h2>Escolha o modelo - Passo {currentStep}</h2>
        <div>  
        <ul>        
          {carros.map(car => <div className='row'><a className='card'><li key={car.id}>
          <Link to={'/'+car.id}>{car.nome}</Link>
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
    carro: store.carro
  });
   
 const mapDispatchToProps= (dispatch)=>{
    
    return{
        addCarro: (carro)=>{dispatch(addCarro(carro))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo1);