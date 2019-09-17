import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo, addVersao, addCor, addOpcional } from '../actions';
import { ADD_MODELO, ADD_VERSAO, ADD_COR, ADD_OPCIONAL } from '../actions/actionTypes';
import { combineReducers } from "redux";

function Passo5(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([props.versao]);
  const [cor, setCor] = useState([props.cor]);
  const [opcional, setOpcional] = useState([props.opcional]);

  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    console.log(props.modelo);
    setModelo(props.modelo);
    setVersao(props.versao);
    setCor(props.cor);
    setOpcional(props.opcional);

    setCurrentStep(props.currentStep);    
  }, [props]);  

  function buyClick(){  
    alert(`Parabens, você acaba de comprar um Vw: \n 
           Modelo: ${modelo[0].nome} \n 
           Versão: ${versao[0].nome} \n
           Cor: ${cor[0].nome} \n
           Opcionais: ${opcional[0].nome} \n
           `);
  }

    if (props.currentStep !== 5) {
      return null
    } 
    return(
      <>
      <h2>Resumo - Passo {props.currentStep}</h2>
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}>
          {mod.id} - {mod.nome}
          <img src={require(`../assets/images/${mod.imagem}`)} alt="Carro" />
          <ul>
            {versao.map(ver => 
            <li key={ver.id}> {ver.id} - {ver.nome} 
            <ul>
              {cor.map(cor => 
                <li key={cor.id}> {cor.id} - {cor.nome}
                <ul>
                  {opcional.map(op => 
                    <li key={op.id}>{op.id} - {op.nome} </li>)}
                </ul>
                </li>
                )}
            </ul>
            </li>)}
          </ul>
          </li>)}
      </ul>
      </div>
      <button onClick={() => buyClick()}>Comprar</button>
      <br></br>      
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
export default connect(mapStateToProps, mapDispatchToProps)(Passo5);