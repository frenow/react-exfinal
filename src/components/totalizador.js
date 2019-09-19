import React from 'react';
import { connect } from 'react-redux';

const Totalizador = (props) => (
  <div>Valor Total: R$ {props.versao[0].preco + props.cor[0].preco + props.opcional.reduce((partial_sum, o) => partial_sum + o.preco,0)}</div>
);

const mapStateToProps = store => ({
    modelo: store.modelo,
    versao: store.versao,
    cor: store.cor,
    opcional: store.opcional
  });

export default connect(mapStateToProps)(Totalizador);