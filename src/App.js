import React from 'react';
import { ApplicationRoutes } from "./ApplicationRoutes";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Store } from './store';
import MapaPassos from './components/mapaPassos'
import "./App.css";

class App extends React.Component {
  render(){
  return (    
    <Provider store={Store}>
    <MapaPassos></MapaPassos>
    <div>
      <ApplicationRoutes />
    </div>
    </Provider>
  );
  }
}
const mapStateToProps = store => ({
  carro: store.carro
});
export default connect(mapStateToProps)(App);