import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addCarro } from '../actions';
import { ADD_CARRO } from '../actions/actionTypes';

function Passo2(props) {
  const [carro, setCarro] = useState(props.carro);
  const [versao, setVersao] = useState([]);
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    console.log(props.carro);
    setCarro(props.carro);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  function addCarro(car, ver) {
    
    console.log('add versao '+ver.nome);  
    setVersao(ver);  
    props.addCarro(car);
    return { type: ADD_CARRO, car }
}  

    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <>
      <h2>Escolha a versão - Passo {props.currentStep}</h2>
      <div>
      <ul>   
        {carro.map(car => 
          <li key={car.id}>{car.id} - {car.nome}
          <ul>
            {car.versoes.map(ver => <li key={ver.id}> {ver.id} - {ver.nome} Preço: {ver.preco} <button onClick={() => addCarro(car, ver)}>Escolher</button></li>)}
          </ul>
          </li>)}
      </ul>
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