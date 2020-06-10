import React, {Component} from 'react';

import 'jquery';
import './indonesia.scss';
import Dashboard from '../Dashboard';
import {Bar, Line, Pie} from 'react-chartjs-2';
// import Chart from 'chart.js';


class Indonesia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    'DKI Jakarta',
                    'Jawa Timur',
                    'Jawa Barat',
                    'Jawa Tengah',
                    'Sulawesi Selatan',
                    'Banten',
                    'NTB',
                    'Sumatera Barat',
                    'Bali',
                    'Papua'
                    ],
                datasets: [
                    {
                        label: 'Data Virus Corona di Indonesia',
                        data: [
                            5554,
                            1772,
                            1556,
                            1023,
                            803,
                            580,
                            334,
                            339,
                            332,
                            328
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
            <div className="container-indonesia" >
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

export default Indonesia;