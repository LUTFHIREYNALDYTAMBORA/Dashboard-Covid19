import React, {Component} from 'react';

import 'jquery';
import './negaraNegara.scss';
import Dashboard from '../Dashboard';
import {Bar, Line, Pie} from 'react-chartjs-2';
// import Chart from 'chart.js';


class NegaraNegara extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['USA', 'SPAIN', 'RUSIA', 'UK', 'ITALY', 'BRAZIL', 'FRANCE', 'GERMANY', 'TURKEY', 'IRAN'],
                datasets: [
                    {
                        label: 'Data Corona Virus Di Dunia',
                        data: [
                            1430506,
                            272646,
                            252245,
                            229705,
                            222104,
                            190137,
                            178060,
                            174098,
                            143114,
                            114533
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)'
                        ]
                    }
                ]
            }
        }
    }


     render() {
        
        return (
            <Dashboard>
            <div className="container-negaraNegara">
                <h3>Data Update Tgl 14 Mei 2020</h3>
                <Bar data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}/>
            </div>
            </Dashboard>
        )
        
    }     
    
}

export default NegaraNegara;