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
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
    console.log(props.modelo);
    setModelo(props.modelo);
    setVersao(props.versao);
    setCor(props.cor);
    setOpcional(props.opcional);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  useEffect(() => {
    setSelecionado(null);
  }, [props.modelo]);   

  function addOpcional(op) {    
    console.log('add opcional '+op.nome);  
    props.addOpcional(op);
    return { type: ADD_OPCIONAL, op }
}  
function handleClick(index) {
  let activeIndex = selecionado === index ? null : index;
  setSelecionado(activeIndex);
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
          <li key={mod.id}><h2>{mod.id} - {mod.nome}</h2>
          <ul>
            {versao.map(ver => 
            <li key={ver.id}><h3>{ver.id} - {ver.nome}</h3>
            <ul>
              {cor.map(cor => 
                <li key={cor.id}><h4>{cor.id} - {cor.nome}</h4>
                <ul>
                  {ver.opcionais.map((op, index) => 
                  <li key={op.id} className={`${selecionado === index && 'selecionado'}`}>
                  {op.id} - {op.nome} Preço: {op.preco}<button onClick={() => {addOpcional(op); handleClick(index);}}>Escolher</button></li>)}
                </ul>
                </li>
                )}
            </ul>
            </li>)}
          </ul>
          </li>)}
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