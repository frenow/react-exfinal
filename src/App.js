import React from 'react';
import { ApplicationRoutes } from "./ApplicationRoutes";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Store } from './store';

class App extends React.Component {
  render(){
  return (
    <Provider store={Store}>
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