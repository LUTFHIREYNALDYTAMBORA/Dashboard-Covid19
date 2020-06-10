import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';
import './Login.scss';

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
        const res = await this.props.LoginAPI({email, password}).catch(err => err);
        if(res) {
            console.log('login sukses');
            localStorage.setItem('userData', res)
            this.setState({
                email: '',
                password: ''
            })
            this.props.loginDariApp()
            // history.push('/')
        } else {
            console.log('login gagal')
            alert('Data yang anda masukkan salah!')
        }
        
    }

    handleBtnRegistrasi = () => {
        const {history} = this.props;
        return history.push('/register')
    }

    render() {
        return (
                <div className="auth-container" >
                    <div className="auth-card">
                    <p className="auth-title">Halaman Login</p>
                        <input className="input" id="email" placeholder="masukkan email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
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