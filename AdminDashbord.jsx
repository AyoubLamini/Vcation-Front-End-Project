import React, { useState} from 'react';
import './AdminDashboard.css';
import myImg from './1337.png';
import img1 from './1.jpg'
import img2 from './2.png'
import img3 from './2.png'
function AdminDashboard () {
    const [asideStyle, setAsideStyle] = useState()
    const [cls, setCls] = useState()
    const showAside = () => {
       setAsideStyle({display : 'block'})
    }
    
    const hideAside = () => {
        setAsideStyle({display : 'none'})
    }
    const changeTheme = () => {
        setCls('dark-theme-variables')
    }
    

    return(
        <body className={cls}>
        <div className='container'>
            <aside style={asideStyle}>
                <div className='top'>
                    <div className='logo'>
                        <img src={myImg} />
                    </div>
                    <div className='close' onClick={hideAside} >
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
                    <div className='sales'>
                        <span className='material-icons-sharp'>analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                    {/*----------------End of Sales -------------------------*/ }
                    <div className='expenses'>
                        <span className='material-icons-sharp'>bar_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Expenses</h3>
                                <h1>$14,124</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                    {/*----------------End of Expenses -------------------------*/ }
                    <div className='income'>
                        <span className='material-icons-sharp'>stacked_line_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Income</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                    {/*----------------End of Income -------------------------*/ }
                </div> 
                {/*----------------End of Income -------------------------*/ }
                <div className="recent-orders">
                    <h2>Recent Applications</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Application Number</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#">Show All</a>
                </div>
            </main>
            {/*-----------------------------------END OF MAIN------------------------*/}
            <div className="right">
                <div className="top">
                    <button onClick={showAside}  id='menu-btn'>
                        <span className='material-icons-sharp'>menu</span>
                    </button>
                    <div className="theme-toggler" onClick={changeTheme}>
                        <span className='material-icons-sharp active'>light_mode</span>
                        <span className='material-icons-sharp'>dark_mode</span>
                    </div>
                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>Hatim</b></p>
                            <small className='text-muted'>Admin</small>
                        </div>
                        <div className="profile-photo">
                            <img src={img1} alt="img not found" />
                        </div>
                    </div>
                </div>
                {/* ------------------------END OF TOP---------------------------*/ }
                <div className="recent-updates">
                    <h2>Recent Updates</h2>
                    <div className="updates">
                        <div className="update">
                            <div className="profile-photo">
                                <img src={img2} alt="img not found" />
                            </div>
                            <div className="message">
                                <p><b>Ayoub Lamini</b> Applied for a vacancy in 2022/12/26</p>
                                <small className='text-muted'>2 minutes Ago</small>
                            </div>
                        </div>
                        <div className="update">
                            <div className="profile-photo">
                                <img src={img3} alt="img not found" />
                            </div>
                            <div className="message">
                                <p><b>Ayoub Lamini</b> Applied for a vacancy in 2022/12/26</p>
                                <small className='text-muted'>2 minutes Ago</small>
                            </div>
                        </div>
                        <div className="update">
                            <div className="profile-photo">
                                <img src={img1} alt="img not found" />
                            </div>
                            <div className="message">
                                <p><b>Ayoub Lamini</b> Applied for a vacancy in 2022/12/26</p>
                                <small className='text-muted'>2 minutes Ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------- END of RECENT UPDATES ----------------------- */}
            </div>
        </div>
    </body>
        
    )
}
export default AdminDashboard;