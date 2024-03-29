import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo, addVersao, addCor, addOpcional } from '../actions';
import { ADD_MODELO, ADD_VERSAO, ADD_COR, ADD_OPCIONAL } from '../actions/actionTypes';

function Passo4(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([props.versao]);
  const [cor, setCor] = useState([props.cor]);
  const [opcional, setOpcional] = useState([]);
  const [currentStep, setCurrentStep] = useState(props.currentStep);
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
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
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}><h2>{mod.nome}</h2>
          <ul>
            {versao.map(ver => 
            <li key={ver.id}><h2>{ver.nome}</h2>
            <ul>
              {cor.map(cor => 
                <li key={cor.id}><h2>{cor.nome}</h2>
                <ul>
                  {ver.opcionais.map((op, index) => <div className='selectItem'><a>
                  <li key={op.id} className={`${selecionado === index && 'selecionado'}`}>
                  <h2>{op.nome} Preço: {op.preco}</h2><button onClick={() => {addOpcional(op); handleClick(index);}} className="btnItem">Escolher</button></li></a></div>)} 
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