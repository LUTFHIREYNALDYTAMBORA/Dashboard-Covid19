import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';
import './Login.scss';
// import { Router, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleLoginSubmit = async () => {
        const{email,password} = this.state;
        console.log('data before send: ', email, password)
        const {history} = this.props;
        console.log(history);
        
        const res = await this.props.LoginAPI({email, password}).catch(err => err);
        if(res) {
            console.log('login sukses');
            localStorage.setItem('userData', res)
            this.setState({
                email: '',
                password: ''
            })
            // this.props.loginDariApp()
            // this.renderRedirect()
            window.location.replace('/')
            
        } else {
            console.log('login gagal')
            alert('Data yang anda masukkan salah!')
        }
        
    }
    
    

      renderRedirect = () => {
          console.log(this.props);
          
        //   console.log('saaaaaaaaaaaaaaaaaa');
        //   location.replace('dash')

          
        //   return <Redirect to='/dashboard' />
      }

    handleBtnRegistrasi = () => {
        const {history} = this.props;
        return history.push('/register')
    }

    render() {
        const { email } = this.state;
        return (
                <div className="auth-container" >
                    <div className="auth-card">
                    <p className="auth-title">Halaman Login</p>
                        <input
                            className="input"
                            id="email"
                            placeholder="masukkan email"
                            type="text"
                            onChange={this.handleChangeText}
                            value={email}
                        />
                        <input className="input" id="password" placeholder="masukkan password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                        <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                        <p className="tanya">Sudah punya akun?</p>
                        <a href="" className="daftar" onClick={this.handleBtnRegistrasi}> Daftar</a>
                        
                    </div>
                </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading 
})
const reduxDispatch = (dispatch) => ({
    LoginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);