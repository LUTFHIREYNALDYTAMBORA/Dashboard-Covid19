import React, {Component, Fragment} from 'react';

import 'jquery';
import './styleBatukBersin.scss';
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard';

class BatukBersin extends Component {
    render() {
        const dataDummy = [
            {
                img: 'https://images.soco.id/273-shutterstock_778482286.jpg.jpeg',
                description: 'Tutup hidung dan mulut Anda dengan tisu saat bersin atau batuk.'

            },
            {
                img:'https://res.cloudinary.com/parentstory/image/upload/c_fill,dpr_3.0,f_auto,fl_progressive,g_faces,q_80,w_412/v1/vtfwgqrdtahfebddkoqt.webp',
                description:'Atau tutup hidung dan mulut Anda dengan lengan Anda, saat bersin atau batuk.',
            },
            {
                img: 'https://cdn02.indozone.id/re/content/2020/02/01/5jsbdx/t_5e3538514242e.jpg?w=700&q=85',
                description:'Gunakanlah masker yang menutupi hidung dan mulut Anda.',
            },
            {
                img: 'https://static.guesehat.com/static/article/slideshow/f2f1e2a1b1232401b4c2921bd7d8f5a6.png',
                description:'Buanglah bekas tisu yang Anda gunakan ke tempat sampah.',
            },
            {
                img: 'https://mmc.tirto.id/image/otf/500x0/2020/03/03/istock-467706864_ratio-16x9.jpg',
                description:'Dan cuci tanganlah dengan baik dan benar.'
            }
        ] 
        return (
            <Dashboard>
            <div className="container-batukBersin">
            <h3 className="tittleBatukBersin">Etika Batuk dan Bersin</h3>
                {dataDummy.map((value, index) => {
                    return (
                        
                            <div>
                                <img className="img-batukBersin" src={value.img} />
                                <p className="descBatukBersin" >{value.description}</p>
                            </div>
                    )
                })}   
            </div>
            </Dashboard>
        )
    }
}


export default BatukBersin;