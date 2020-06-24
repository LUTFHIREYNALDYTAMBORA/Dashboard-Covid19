import React, {Component} from 'react';
import 'jquery';
import './form.scss';
// import ReactDOM from 'react-dom';
import Dashboard from '../Dashboard';
import { Container, Button, TableContainer, TableHead, TableCell, Table, Paper, TableRow, TableBody} from '@material-ui/core';
import DataTables from '../../organisms/DataTables';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            noReg: 1,
            namaLengkap: '',
            kelamin: '',
            tempatLahir: '',
            agama: '',
            alamat: '',
            noTelp: '',
            email: '',

            namaLengkapError: '',
            kelaminError: '',
            tempatLahirError: '',
            agamaError: '',
            alamatError: '',
            noTelpError: '',
            emailError: '',

            data: !JSON.parse(localStorage.getItem('data')) ? [] :   JSON.parse(localStorage.getItem('data')),
            imagePreviewUrl: '',
            idData: null,
            buttonEdit: false
        }
        // this.handleSubmit=this.handleSubmit.bind(this)
    }

    _handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _handleSubmitLocalStorage = () => {
        console.log(this.state.data);
        localStorage.setItem('data', JSON.stringify(this.state.data))
    }
    

    _handleValidasi = () => {
        let namaLengkapError = '';
        let kelaminError = '';
        let tempatLahirError = '';
        let agamaError = '';
        let alamatError = '';
        let noTelpError = '';
        let emailError = "";

        if(!this.state.namaLengkap) {
            namaLengkapError = 'Nama Kosong!';
        }

        if(!this.state.kelamin) {
            kelaminError = 'Jenis Kelamin Kosong!';
        }

        if(!this.state.tempatLahir) {
            tempatLahirError = 'Tempat Lahir Kosong!';
        }

        if(!this.state.agama) {
            agamaError = 'Agama Kosong!';
        }

        if(!this.state.alamat) {
            alamatError = 'Alamat Kosong!';
        }

        if(!this.state.noTelp) {
            noTelpError = 'No Telepon Kosong!';
        }

        if (!this.state.email.includes("@")) {
            emailError = "Email Salah!";
        }

        if (emailError || namaLengkapError || kelaminError || tempatLahirError || agamaError || alamatError || noTelpError) {
            this.setState({emailError, namaLengkapError, kelaminError, tempatLahirError, agamaError, alamatError, noTelpError});
            return false;
        }
        return true;
    };

    handleSubmit = (e) => {
        // console.log(this.state.buttonEdit ? 'DATA DI EDIT' : 'DATA DI SUBMIT');
        const imgData = this.state.imagePreviewUrl ? this.getBase64Image(this.state.imagePreviewUrl) : '';
        const payload = {
            noReg: this.state.noReg,
            namaLengkap: this.state.namaLengkap,
            kelamin: this.state.kelamin,
            tempatLahir: this.state.tempatLahir,
            agama: this.state.agama,
            alamat: this.state.alamat,
            noTelp: this.state.noTelp,
            email: this.state.email,
            imagePreviewUrl: imgData,
        }
        
        e.preventDefault(e);
        const isValid = this._handleValidasi();
        if (isValid) {
            if (!this.state.buttonEdit) {
                this.setState({
                    data: this.state.data.concat(payload),
                    noReg: '',
                    namaLengkap: '',
                    kelamin: '',
                    tempatLahir: '',
                    agama: '',
                    alamat: '',
                    noTelp: '',
                    email: '',
                    imagePreviewUrl: '',
    
                    namaLengkapError: '',
                    kelaminError: '',
                    tempatLahirError: '',
                    agamaError: '',
                    alamatError: '',
                    noTelpError: '',
                    emailError: ''
                })

                } else {
                    const imgData = this.getBase64Image(this.state.imagePreviewUrl);
                   const payloadEdit = {
                    noReg: this.state.noReg,
                    namaLengkap: this.state.namaLengkap,
                    kelamin: this.state.kelamin,
                    tempatLahir: this.state.tempatLahir,
                    agama: this.state.agama,
                    alamat: this.state.alamat,
                    noTelp: this.state.noTelp,
                    email: this.state.email,
                    imagePreviewUrl: imgData,
                }
                   console.log(payloadEdit);

                    this.setState((prevState) => ({
                        data: [
                            ...prevState.data.slice(0, this.state.idData),
                            { ...payloadEdit},
                            ...prevState.data.slice(this.state.idData + 1)
                        ],
                        namaLengkap: '',
                        kelamin: '',
                        tempatLahir: '',
                        agama: '',
                        alamat: '',
                        noTelp: '',
                        email: '',
                        imagePreviewUrl: '',
        
                        namaLengkapError: '',
                        kelaminError: '',
                        tempatLahirError: '',
                        agamaError: '',
                        alamatError: '',
                        noTelpError: '',
                        emailError: '',
                        buttonEdit: false
                    }))
                   
                   
                }
        }

    }

    getBase64Image(img) {
        var canvas = document.getElementById("canvas-element");
        const ctx = canvas.getContext("2d");

        // create new Image to assign image url
        const image = new Image();
        image.src = img;
        image.onload = function() {
          const canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
        };
    
        const dataURL = canvas.toDataURL("image/png");
    
        return dataURL;
      };

    handleReset = () => {   
        this.setState({
            noReg: '',
            namaLengkap: '',
            kelamin: '',
            tempatLahir: '',
            agama: '',
            alamat: '',
            noTelp: '',
            email: '',
            imagePreviewUrl: ''
        })      
    }

    _handleChangeImage = (e) => {
        // console.log(e);
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.addEventListener('load', () => {
            this.setState({
                imagePreviewUrl: reader.result
                
            })
        });
        reader.readAsDataURL(file);
    }

    // _handleImageUpload = (e) => {
    //     let file = e.target.files[0];
    //     this._handleGetBase64(file).then(base64 => {
    //       localStorage.setItem["fileBase64"] = base64;
    //     //   console.debug("file stored",base64);
    //     });
    // };

    // _handleGetBase64 = (file) => {
    //     return new Promise((resolve,reject) => {
    //        const reader = new FileReader();
    //        reader.onload = () => resolve(reader.result);
    //        reader.onerror = error => reject(error);
    //        reader.readAsDataURL(file);
    //     });
    //   }

    _handleDelete = id => {
        let newArrray = [...this.state.data]
        console.log(newArrray);
        console.log(id);
        newArrray.splice(id, 1);
            // console.log(newArrray);    
        this.setState({ data: newArrray})
        this._handleSubmitLocalStorage()   
    }

    _handleEdit = id => {
      
        let editItem = this.state.data.find((data, idx) => {
            return id === idx && data;
        })
        // console.log(editItem);
        

        this.setState({
            idData: id,
            buttonEdit: true,
            namaLengkap: editItem.namaLengkap,
            kelamin: editItem.kelamin,
            tempatLahir: editItem.tempatLahir,
            agama: editItem.agama,
            alamat: editItem.alamat,
            noTelp: editItem.noTelp,
            email: editItem.email,
            imagePreviewUrl: editItem.imagePreviewUrl
        })
    }

    
    
    _renderAksi = id => {
        return(
            <div>
            <Button 
                color="primary"
                onClick={() => this._handleEdit(id)}
            >Edit</Button>
            <Button 
                color="secondary"
                onClick={() => this._handleDelete(id)}
            >Delete</Button>
            </div>
        )
    }


    _renderImg = (img) => {
        return(
            <div >
                <canvas id="canvas-element"></canvas>
                <img  style={{width: '100px'}} id='imageFile' name='imageFile' src={img} />
            </div>
        )
    }

    render() {
        return (
            <Dashboard>
                {this._handleSubmitLocalStorage()}
                <Container maxWidth="sm" onSubmit={this.handleSubmit}>
                    <h5><b>FORMULIR PENDAFTARAN MAHASISWA BARU ITB (ITenas Bandung)</b></h5>
                    <h5><b>Tahun Akademik 2050/2051</b></h5>                    
                     <br />
                    <label>Nama Lengkap :</label> <input type='text' name="namaLengkap" value={this.state.namaLengkap} onChange={this._handleChange} ></input> 
                    <span style={{color: 'red', paddingLeft: '10px'}} >{this.state.namaLengkapError}</span>
                    <br /> 

                    <label>Jenis Kelamin :</label> <select onChange={this._handleChange} defaultValue='Jenis Kelamin' name="kelamin" value={this.state.kelamin}>
                        <option defaultValue='Jenis Kelamin'></option>
                        <option value='laki'>Laki-laki</option>
                        <option value='perempuan'>Perempuan</option>
                    </select> 
                    <span style={{color: 'red', paddingLeft: '10px'}} >{this.state.kelaminError}</span>
                    <br />

                    <label>Tempat Lahir :</label> <input type='text' name="tempatLahir" value={this.state.tempatLahir} onChange={this._handleChange} ></input> 
                    <span style={{color: 'red', paddingLeft: '10px'}} >{this.state.tempatLahirError}</span>
                    <br />

                    <label>Agama :</label> <select onChange={this._handleChange} defaultValue='Agama' name="agama" value={this.state.agama}>
                        <option defaultValue='Agama'></option>
                        <option value='islam'>Islam</option>
                        <option value='Kristen Katolik'>Kristen Katolik</option>
                        <option value='Kristen Protestan'>Kristen Protestan</option>
                        <option value='budha'>Budha</option>
                        <option value='hindu'>Hindu</option>
                    </select> 
                    <span style={{color: 'red', paddingLeft: '10px'}} >{this.state.agamaError}</span><br />

                    <label>Alamat :</label> <textarea name="alamat" type='text' value={this.state.alamat} onChange={this._handleChange} ></textarea> 
                    <span style={{color: 'red', paddingLeft: '10px'}} >{this.state.alamatError}</span><br />

                    <label>No. Telepon :</label>
                    {/* <PhoneInput
                        name= 'noTelp'
                        // type= 'number'
                        value={this.state.noTelp}
                        country={'id'}
                        onChange={this._handleChange}
                    /> */}
                    <input name="noTelp" type='number' value={this.state.noTelp} onChange={this._handleChange} ></input> 
                    <span style={{color: 'red', paddingLeft: '10px'}} >{this.state.noTelpError}</span>
                    <br />

                    <label>Email :</label> <input type='text' name="email" value={this.state.email} onChange={this._handleChange} ></input> 
                    <span style={{color: 'red', paddingLeft: '10px'}} >{this.state.emailError}</span>
                    <br />

                    <label>Upload Photo :</label> <input style={{float:'right'}} type='file' name="file" onChange={this._handleChangeImage}></input> <br />
                    
                    {
                    this.state.imagePreviewUrl && <img src={this.state.imagePreviewUrl}  style={{width:'200px'}} />
                    } <br /><br />

                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={this.handleSubmit}
                        >{this.state.buttonEdit ? 'Update' : 'Submit'}</Button>  
                    <Button variant="contained" color="primary" type="reset" onClick={this.handleReset} >Reset</Button>
                
                </Container>
                <div style={{paddingBottom:'200px'}}></div>

                <DataTables 
                    dataDariForm={this.state.data} 
                    renderGambar={(img) => this._renderImg(img)} 
                    renderAksiDariApp={this._renderAksi} 
                />
            </Dashboard>

            
        )
    }
}


export default Form;