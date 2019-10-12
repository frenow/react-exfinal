import React, { useState, useEffect, lazy, Suspense } from "react";
import { Carros } from "../api/carros";
import MapaPassos from './mapaPassos';

import { Passo1error } from '../components/passo1error';
import DarkModeToggle from './DarkModeToggle';
import '../style.scss';

const Passo1 = React.lazy(() => import('./passo1'));
const Passo2 = React.lazy(() => import('./passo2'));
const Passo3 = React.lazy(() => import('./passo3'));
const Passo4 = React.lazy(() => import('./passo4'));
const Passo5 = React.lazy(() => import('./passo5'));

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
        <div className=''>
        <button 
          type="button" onClick={_prev} className='btn ant'>
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
        <div className=''>
        <button  className='btn prox'
          type="button" onClick={_next}>
        Próximo >
        </button>        
        </div>
      )
    }
    return null;
  }
      return (
        <>
         
        <MapaPassos currentStep={currentStep} ></MapaPassos>
        <div className="navbar">
          <DarkModeToggle />
        </div>
        <h1>Monte seu VW</h1>
        <div className='cont_cabecalho'>
          <div className='cont_btn'>
            {previousButton()}
            {nextButton()}
          </div>
        </div>
        

        <form onSubmit={handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
        <Passo1error>
        <Suspense fallback={<h1>Loading...</h1>}>
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
        </Suspense>
        </Passo1error>
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