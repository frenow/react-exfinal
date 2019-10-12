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
              {ver.cores.map((cor, index) => <div className='selectItem'><a>
              <li key={cor.id} className={`${selecionado === index && 'selecionado'}`}>
              <h2>{cor.nome} Preço: {cor.preco}</h2><button onClick={() => {addCor(cor); handleClick(index);}} className="btnItem">Escolher</button></li></a></div>)} 
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