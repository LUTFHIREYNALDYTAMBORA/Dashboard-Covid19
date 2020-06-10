import React, {Component} from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        const{email,password} = this.state;
        console.log('data before send: ', email, password)
        this.props.RegisterAPI({email, password});
        const {history} = this.props;
        this.setState({
            email: '',
            password: ''     
        })
        
    }

    handleBtnLogin = () => {
        const {history} = this.props;
        history.push('/login')
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                <p className="auth-title">Registrasi</p>
                    <input className="input" id="email" placeholder="masukkan email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input className="input" id="password" placeholder="masukkan password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                    <Button onClick={this.handleRegisterSubmit} title="Daftar" loading={this.props.isLoading} />
                    <button className="btn-login" onClick={this.handleBtnLogin}>Login</button>
                </div>
                {/* <button>Dashboard</button> */}
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading 
})
const reduxDispatch = (dispatch) => ({
    RegisterAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);