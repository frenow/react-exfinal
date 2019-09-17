import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo, addVersao, addCor } from '../actions';
import { ADD_MODELO, ADD_VERSAO, ADD_COR } from '../actions/actionTypes';

function Passo3(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([props.versao]);
  const [cor, setCor] = useState([]);
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    console.log(props.modelo);
    setModelo(props.modelo);
    setVersao(props.versao);
    setCor(props.cor);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  function addCor(cor) {    
    console.log('add cor '+cor.nome);  
    props.addCor(cor);
    return { type: ADD_COR, cor }
}  

    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <>
      <h2>Escolha a cor - Passo {props.currentStep}</h2>
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}>{mod.id} - {mod.nome}
          <ul>
            {versao.map(ver => 
            <li key={ver.id}> {ver.id} - {ver.nome} 
            <ul>
              {ver.cores.map(cor => <li key={cor.id}>{cor.id} - {cor.nome} Preço: {cor.preco} <button onClick={() => addCor(cor)}>Escolher</button></li>)}
            </ul>
            </li>)}
          </ul>
          </li>)}
      </ul>
      </div>
      </>
    );
  }
  const mapStateToProps = store => ({
    modelo: store.modelo,
    versao: store.versao,
    cor: store.cor
  });
   
 const mapDispatchToProps= (dispatch)=>{    
    return{
      addModelo: (modelo)=>{dispatch(addModelo(modelo))},
      addVersao: (versao)=>{dispatch(addVersao(versao))},
      addCor: (cor)=>{dispatch(addCor(cor))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo3);