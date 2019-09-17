import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo, addVersao } from '../actions';
import { ADD_MODELO, ADD_VERSAO } from '../actions/actionTypes';

function Passo2(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([]);
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    console.log(props.modelo);
    setModelo(props.modelo);
    setVersao(props.versao);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  function addVersao(ver) {    
    console.log('add versao '+ver.nome);  
    props.addVersao(ver);
    return { type: ADD_VERSAO, ver }
}  

    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <>
      <h2>Escolha a versão - Passo {props.currentStep}</h2>
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}>{mod.id} - {mod.nome}
          <ul>
            {mod.versoes.map(ver => <li key={ver.id}> {ver.id} - {ver.nome} Preço: {ver.preco} <button onClick={() => addVersao(ver)}>Escolher</button></li>)}
          </ul>
          </li>)}
      </ul>
      </div>
      </>
    );
  }
  const mapStateToProps = store => ({
    modelo: store.modelo,
    versao: store.versao
  });
   
 const mapDispatchToProps= (dispatch)=>{    
    return{
      addModelo: (modelo)=>{dispatch(addModelo(modelo))},
      addVersao: (versao)=>{dispatch(addVersao(versao))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo2);