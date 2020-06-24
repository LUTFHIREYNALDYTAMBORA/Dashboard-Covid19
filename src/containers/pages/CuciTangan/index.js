import React, {Component, Fragment} from 'react';

import 'jquery';
import './styleCuciTangan.scss';
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard';
import TextFieldReusbale from '../../../components/atoms/TextFieldReusable';

class CuciTangan extends Component {
    _handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        
    }

    render() {
        const dataDummy = [
            {
                img: 'https://i0.wp.com/f1-styx.imgix.net/article/2020/03/20105032/ct5-tangan-seseorang-yang-penuh-busa-saat-cuci-tangan-768x512.jpg?resize=1000%2C666&ssl=1',
                desc: 'Langkah pertama adalah menggosok telapak tangan dengan cara memutar'
            },
            {
                img: 'https://www.go-dok.com/wp-content/uploads/2017/05/Mencuci-tangan-benar-web.jpg',
                desc: 'Langkah kedua adalah dengan menggosok punggung tangan'
            },
            {
                img: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1586252571/axguwtdjdliw0mmukvlj.jpg',
                desc: 'Langkah ketiga adalah dengan menggosok sela-sela jari'
            },
            {
                img: 'https://docplayer.info/docs-images/63/49199619/images/6-7.jpg',
                desc: 'Langkah keempat adalah dengan mengunci jari-jari tangan'
            },
            {
                img: 'https://kaltimtoday.co/wp-content/uploads/2020/02/18-512x219.png',
                desc: 'Langkah kelima adalah menggosok ibu jari dengan cara memutar'
            },
            {
                img: 'https://cdn.popmama.com/content-images/post/20180802/kisah-ngidam-paling-aneh-2-ea58ee0081aef9e683b4b7f0ba4e9783_600xauto.jpg',
                desc: 'Langkah keenam adalah menggosok ujung jari kepada telapak tangan dengan cara memutar'
            }
        ] 
        return (
            <Dashboard>
            <div className="container-cuciTangan">
                <p className="titleCuciTangan">Cara Mencuci Tangan Dengan Baik dan Benar</p>
                <h4>Menurut WHO, ada 6 langkah mencuci tangan dengan benar:</h4>
                    {dataDummy.map((value, index) => {
                        return (
                            <div> 
                                <img className="img-cuciTangan" src={value.img} />
                                <p className="descCuciTangan">{value.desc}</p>
                            </div>
                        )
                    })
                    } 

{/* <TextFieldReusbale label="Nama Saya" type="text" name="password" placeholder="Nama Lengkap" icon2={true} ambilValue={(e) => this._handleChange(e)
                }/>
                <TextFieldReusbale label="Password" name="password" type="text" placeholder="Password" ambilValue={(e) => this._handleChange(e)
                }/> */}
            </div>
            </Dashboard>
        )
    }
}


export default CuciTangan;