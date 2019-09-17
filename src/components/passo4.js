import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo, addVersao, addCor, addOpcional } from '../actions';
import { ADD_MODELO, ADD_VERSAO, ADD_COR, ADD_OPCIONAL } from '../actions/actionTypes';
import { combineReducers } from "redux";

function Passo4(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([props.versao]);
  const [cor, setCor] = useState([props.cor]);
  const [opcional, setOpcional] = useState([]);
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    console.log(props.modelo);
    setModelo(props.modelo);
    setVersao(props.versao);
    setCor(props.cor);
    setOpcional(props.opcional);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  function addOpcional(op) {    
    console.log('add opcional '+op.nome);  
    props.addOpcional(op);
    return { type: ADD_OPCIONAL, op }
}  

    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <>
      <h2>Escolha os Opcionais - Passo {props.currentStep}</h2>
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}>{mod.id} - {mod.nome}
          <ul>
            {versao.map(ver => 
            <li key={ver.id}> {ver.id} - {ver.nome} 
            <ul>
              {cor.map(cor => 
                <li key={cor.id}> {cor.id} - {cor.nome}
                <ul>
                  {ver.opcionais.map(op => <li key={op.id}>{op.id} - {op.nome} Preço: {op.preco}<button onClick={() => addOpcional(op)}>Escolher</button></li>)}
                </ul>
                </li>
                )}
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
    cor: store.cor,
    opcional: store.opcional
  });
   
 const mapDispatchToProps= (dispatch)=>{    
    return{
      addModelo: (modelo)=>{dispatch(addModelo(modelo))},
      addVersao: (versao)=>{dispatch(addVersao(versao))},
      addCor: (cor)=>{dispatch(addCor(cor))},
      addOpcional: (opcional)=>{dispatch(addOpcional(opcional))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo4);