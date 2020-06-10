import React, {Component, Fragment} from 'react';
import 'jquery';
import './stylePenjelasan.scss';
import Dashboard from '../Dashboard';

class Penjelasan extends Component {
    render() {
        const dataDummy = [
            {
                tittle:'Penjelasan',
                description:'Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian. Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) yang lebih dikenal dengan nama virus Corona adalah jenis baru dari coronavirus yang menular ke manusia. Walaupun lebih bayak menyerang lansia, virus ini sebenarnya bisa menyerang siapa saja, mulai dari bayi, anak-anak, hingga orang dewasa, termasuk ibu hamil dan ibu menyusui. Infeksi virus Corona disebut COVID-19 (Corona Virus Disease 2019) dan pertama kali ditemukan di kota Wuhan, China pada akhir Desember 2019. Virus ini menular dengan sangat cepat dan telah menyebar ke hampir semua negara, termasuk Indonesia, hanya dalam waktu beberapa bulan.',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/597px-SARS-CoV-2_without_background.png'
            }
        ] 
        return (
            <Dashboard>
            <div className="container-penjelasan">
                {dataDummy.map((value, index) => {
                        return (
                            <div> 
                                <img className="img-penjelasan" src={value.img} />
                                <p className="tittlePenjelasan"><b>{value.tittle}</b></p>
                                <p className="descPenjelasan" >{value.description}</p>
                                
                            </div>
                        )
                    })
                }
            </div>
            </Dashboard>
        )
    }     
    
}


export default Penjelasan;