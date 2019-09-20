import React, { useState, useEffect } from "react";
import { Carros } from "../api/carros";
import MapaPassos from './mapaPassos';
import Passo1 from "./passo1";
import Passo2 from "./passo2";
import Passo3 from "./passo3";
import Passo4 from "./passo4";
import Passo5 from "./passo5";

export default function Home(props) {
 
  const [carros, setCarros] = useState([]);
  const [modelo, setModelo] = useState([]);
  const [currentStep, setCurrentSpep] = useState(1);

  useEffect(() => {
    Carros.getCarros().then( (car) => setCarros(car.modelos));    
    setModelo(carros);
  }, []);  


    const handleChange = event => {
      const {name, value} = event.target;
 
    }
     
    const handleSubmit = event => {
      event.preventDefault();

    }
    
    const _next = () => {
      let current = currentStep;
      current = current >= 4? 5: current + 1;
      setCurrentSpep(current);
    }
      
    const _prev = () => {
      let current = currentStep;
      current = current <= 1? 1: current - 1
      setCurrentSpep(current);
    }
  
  /*
  * the functions for our button
  */
  function previousButton() {
    let current = currentStep;
    if(current !==1){
      return (
        <div className='centralizado'>
        <button 
          type="button" onClick={_prev}>
        Anterior
        </button>
        </div>
      )
    }
    return null;
  }
  
  function nextButton(){
    let current = currentStep;
    if(current <5){
      return (
        <div className='centralizado'>
        <button 
          type="button" onClick={_next}>
        Próximo
        </button>        
        </div>
      )
    }
    return null;
  }
      return (
        <>
        <MapaPassos currentStep={currentStep} ></MapaPassos>
        <h1>Monte seu VW</h1>

        <form onSubmit={handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Passo1 
            currentStep={currentStep} 
            handleChange={handleChange}
            carros={carros}
          />
          <Passo2 
            currentStep={currentStep} 
            handleChange={handleChange}
          />
          <Passo3 
            currentStep={currentStep} 
            handleChange={handleChange}
          />
          <Passo4 
            currentStep={currentStep} 
            handleChange={handleChange}
          />
          <Passo5 
            currentStep={currentStep} 
            handleChange={handleChange}
          />
          {previousButton()}
          {nextButton()}
  
        </form>
        <style jsx>{`
        body {
            margin: 1em;
        }
        .centralizado { 
          text-align: center; 
        }
        `}</style>           
        </>       
      );
  }