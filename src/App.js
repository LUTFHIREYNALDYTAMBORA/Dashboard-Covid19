import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './containers/pages/Dashboard';
import Login from './containers/pages/Login';
import Register from './containers/pages/Register';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import Penjelasan from './containers/pages/Penjelasan';
import TandaGejala from './containers/pages/TandaGejala';
import CuciTangan from './containers/pages/CuciTangan';
import NegaraNegara from './containers/pages/NegaraNegara';
import Indonesia from './containers/pages/Indonesia';
import BatukBersin from './containers/pages/BatukBersin';
import { AuthProvider } from './config/firebase/Auth/Auth.js';
import PrivateRoute from './config/PrivateRoute/PrivateRoute.js';

export default class App extends Component {
  state = {
    login: false
  }

  handleLogin =  () => {
    this.setState({
      login: !this.state.login
    }) 
  }

  handleLogout = () => {
    const {history} = this.props;
    return history.push('/login')
  }

  renderLogin = () => {
    return (

      <Login loginDariApp= { () => this.handleLogin() }  />
    )
  }

  renderApp = () => {
    return (
      <Router>
      <div>
        <Route exact path="/" component= {Dashboard} />
        {/* <Route exact path="/login" component= {Login}/> */}
        <Route exact path="/register" component= {Register}/>

        <Route path="/penjelasan"  component= {Penjelasan}/>
        <Route path="/tandaGejala"  component= {TandaGejala}/>
        <Route path="/cuciTangan"  component= {CuciTangan}/>
        <Route path="/10-Negara-Kasus-Terbanyak"  component= {NegaraNegara}/>
        <Route path="/10-Prov-Penyebaran-Terbanyak-di-Indonesia"  component= {Indonesia}/>
        <Route path="/batukBersin"  component= {BatukBersin}/> 
      </div>
    </Router>
    )
  }
  render() {
    return (
        <Provider store={store}>
          <AuthProvider>
            {
              this.state.login ? this.renderApp() : this.renderLogin()
            }
          </AuthProvider>
        </Provider>
    )
  }
}