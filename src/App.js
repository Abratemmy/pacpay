import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/router';
import WOW from 'wowjs';

export class App extends Component {

  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
    <div className="App">
      <Router />
    </div>
  );
}
}
export default App;
