import React, {Component, Fragment} from 'react';
import 'jquery';
import './styleTandaGejala.scss';
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard';

class TandaGejala extends Component {
    render() {
        const dataDummy = [
            {
                tittle:'Tanda dan Gejala',
                body:'Secara umum, ada 3 gejala umum yang bisa menandakan seseorang terinfeksi virus Corona, yaitu:',
                img: 'https://img2.pngdownload.id/20180615/zqv/kisspng-disease-symptom-fever-mig-21-5b236d992f30c4.2178334215290484731933.jpg',
                description: 'Demam (suhu tubuh di atas 38 derajat Celsius)'

            },
            {
                img:'https://img2.pngdownload.id/20180524/sbh/kisspng-cough-asthma-bronchitis-common-cold-respiratory-sy-seki-takakazu-5b073b0ecc16c1.029523711527200526836.jpg',
                description:'Batuk',
            },
            {
                img: 'https://pkbi.or.id/wp-content/uploads/2020/04/grafis-korona-640x446.jpg',
                description:'Sesak nafas',
            }
        ] 
        return (
            <Dashboard>
            <div className="container-tandaGejala">
                {dataDummy.map((value, index) => {
                        if (index === 0)
                        return (
                            <div> 
                                <p className="tittleTandaGejala"><b>{value.tittle}</b></p>
                                <p className="bodyTandaGejala"><b>{value.body} </b></p>
                                <img className="img-demam" src={value.img} />
                                <p className="descDemam" >{value.description}</p>
                            </div>
                        )
                        if (index === 1)
                        return (
                            <div> 
                                <img className="img-batuk" src={value.img} />
                                <p className="descBatuk" >{value.description}</p>
                                
                            </div>
                        )
                        if (index === 2)
                        return (
                            <div> 
                                <img className="img-sesak" src={value.img} />
                                <p className="descSesak" >{value.description}</p>
                                
                            </div>
                        )   
                    })
                } 
            </div>
            </Dashboard>
        )
    }
}


export default TandaGejala;