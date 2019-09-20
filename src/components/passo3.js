import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo, addVersao, addCor } from '../actions';
import { ADD_MODELO, ADD_VERSAO, ADD_COR } from '../actions/actionTypes';

function Passo3(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([props.versao]);
  const [cor, setCor] = useState([]);
  const [currentStep, setCurrentStep] = useState(props.currentStep);
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
    setModelo(props.modelo);
    setVersao(props.versao);
    setCor(props.cor);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  useEffect(() => {
    setSelecionado(null);
  }, [props.modelo]);   

  function addCor(cor) {    
    console.log('add cor '+cor.nome);  
    props.addCor(cor);
    return { type: ADD_COR, cor }
}  
function handleClick(index) {
  let activeIndex = selecionado === index ? null : index;
  setSelecionado(activeIndex);
}
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <>
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}><h2>{mod.nome}</h2>
          <ul>
            {versao.map(ver => 
            <li key={ver.id}><h2>{ver.nome}</h2>
            <ul>
              {ver.cores.map((cor, index) => <div className='row'><a className='card'>
              <li key={cor.id} className={`${selecionado === index && 'selecionado'}`}>
              <h2>{cor.nome} Preço: {cor.preco}</h2><button onClick={() => {addCor(cor); handleClick(index);}}>Escolher</button></li></a></div>)} 
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