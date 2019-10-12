import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Totalizador from './totalizador';
import { removeOpcional } from '../actions';
import { REMOVE_OPCIONAL } from '../actions/actionTypes';

function Passo5(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([props.versao]);
  const [cor, setCor] = useState([props.cor]);
  const [opcional, setOpcional] = useState([props.opcional]);

  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    setModelo(props.modelo);
    setVersao(props.versao);
    setCor(props.cor);
    setOpcional(props.opcional);

    setCurrentStep(props.currentStep);    
  }, [props.opcional]);  

  function removeOpcional(op) {
    console.log('remove opcional '+op.nome);
    props.removeOpcional(op);
    return { type: REMOVE_OPCIONAL, op }
    }  

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
      <div className='finaliza_pedido'>       
        {modelo.map(mod => <div className=''>          
          <a className=''>
          <div key={mod.id}>
            <h2>Modelo: {mod.nome}</h2>
            <img src={require(`../assets/images/${mod.imagem}`)} alt="Carro" className='compra_carro' />          
            {
              versao.map(ver => 
              <div className='listarecursos' key={ver.id}><h2>Versão: {ver.nome}</h2>
            
              {cor.map(cor => 
                <div key={cor.id}><h2>Cor: {cor.nome}</h2>            
                  {opcional.map(op => <div className=''>
                    <a className='card'>                      
                        <h2>Opcional: {op.nome}</h2><button className='btn remover' onClick={() => removeOpcional(op)}>Remover Opcional</button>                      
                    </a>
                </div>)}                 
                </div>
                )}            
            </div>)}          
          </div></a></div>)} 
      
      </div>
      <div className='finalizaCompra'>
      <h2><Totalizador /></h2>
      <button onClick={() => buyClick()} className='btn comprar'>Comprar</button>
      <br></br>  
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
      removeOpcional: (op)=>{dispatch(removeOpcional(op))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo5);