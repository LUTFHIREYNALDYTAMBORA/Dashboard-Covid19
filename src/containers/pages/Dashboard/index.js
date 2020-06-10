import React, {Component, Fragment, Children} from 'react';

import 'jquery';

import {Link} from 'react-router-dom';

class Dashboard extends Component {

    render() {
        

        return (
            <Fragment>
            <div className="container-header">    
            <header className="main-header">
            {/* Logo */}
            <a href="" className="logo">
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className="logo-mini"><b>LRT</b></span>
            {/* logo for regular state and mobile devices */}
            <span className="logo-lg"><b>Covid</b>19</span>
            </a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top">
            {/* Sidebar toggle button*/}
            <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            {/* Navbar Right Menu */}
            <a href="/login" className="logout" > Logout </a>
            </nav>
            
        </header>
        </div>
                
        <div className="container-menu">
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel">
                    
                </div>
                
                {/* sidebar menu: : style can be found in sidebar.less */}
                
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active treeview menu-open">
                    <a href="">
                        <i className="fa fa-dashboard" /> <span>Dashboard</span>
                        <span className="pull-right-container">
                        
                        </span>
                    </a>
                    </li>
                    
                    <li className="treeview">
                    <a href="">
                        <i className="fa fa-edit" /> <span>Virus Corona</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right" />
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="/penjelasan"><i className="fa fa-circle-o" /> Penjelasan </a></li>
                        <li><a href="/tandaGejala"><i className="fa fa-circle-o" /> Tanda dan Gejala </a></li>
                    </ul>
                    </li>

                    <li className="treeview">
                    <a href="">
                        <i className="fa fa-pie-chart" />
                        <span>Penyebaran Virus Corona</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right" />
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="/10-Negara-Kasus-Terbanyak"><i className="fa fa-circle-o" /> 10 Negara Kasus Terbanyak </a></li>
                        <li><a href="/10-Prov-Penyebaran-Terbanyak-di-Indonesia"><i className="fa fa-circle-o" /> 10 Prov Terbanyak Di Indonesia </a></li>
                    </ul>
                    </li>
                        
                    <li className="treeview">
                    <a href="no">
                        <i className="fa fa-share" /> <span>Pencegahan</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right" />
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="/cuciTangan"><i className="fa fa-circle-o" /> Cara Cuci Tangan </a></li>
                        <li><a href="/batukBersin"><i className="fa fa-circle-o" /> Etika Batuk dan Bersin </a></li>
                    </ul>
                    </li>
                    
                    
                </ul>
                </section>
                {/* /.sidebar */}
            </aside>
            </div>
            
         
            
            
            
            
            <div>
                {
                    this.props.children
                }
            </div>         
            
            
            </Fragment>
        )
    }
}

// var tanggal = new Date();
// document.getElementById("hasil").innerHTML = tanggal;

export default Dashboard;