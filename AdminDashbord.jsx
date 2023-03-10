import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import axios from 'axios';
import myImg from './1337.png';
function AdminDashboard  () {
    return(
        <div className='container'>
            <aside>
                <div className='top'>
                    <div className='logo'>
                        <img src={myImg} />
                    </div>
                    <div className='close' id='close-btn'>
                        <span className='material-icons-sharp'>close</span>
                    </div>
                </div>
                <div className='sidebar'>
                    <a href="#">
                        <span className='material-icons-sharp'>grid_view</span>
                        <h3>Dashboard</h3>
                    </a>
                    <a href="#" className='active'>
                        <span className='material-icons-sharp'>person_outline</span>
                        <h3>Students</h3>
                    </a>
                    <a href="#">
                        <span className='material-icons-sharp'>inventory</span>
                        <h3>Vacancy Applications</h3> 
                    </a>
                    <a href="#">
                        <span className='material-icons-sharp'>insights</span>
                        <h3>Analytics</h3> 
                    </a>
                    <a href="#">
                        <span className='material-icons-sharp'>mail_outline</span>
                        <h3>Messages</h3>
                        <span className='message-count'>26</span>
                    </a>
                    <a href="#">
                        <span className='material-icons-sharp'>report_gmailerrorred</span>
                        <h3>Reports</h3>
                    </a>
                    <a href="#">
                        <span className='material-icons-sharp'>settings</span>
                        <h3>Settings</h3>
                    </a>
                    <a href="#">
                        <span className='material-icons-sharp'>logout</span>
                        <h3>Logout</h3>
                    </a>
                </div>
            </aside>
            <main>
                <h1>Dashboard</h1>

                <div className="insights">
                    
                </div>
                
            </main>
        </div>
        
    )
}
export default AdminDashboard;