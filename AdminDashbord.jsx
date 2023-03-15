import React, { useState} from 'react';
import './AdminDashboard.css';
import lightModeLogo from './logo-light.png';
import darkModeLogo from './logo-dark.png';
import img1 from './1.jpg'
import img2 from './2.png'
import img3 from './3.png'
function AdminDashboard () {
    const [myIcon, setMyIcon] = useState('material-icons-sharp')
    const [theme, setTheme] = useState('lightmode')
    const [isLightActive, setIsLightActive] = useState(true)
    const [isDarkActive, setIsDarkActive] = useState(false)
    const [cls, setCls] = useState(); // class of aside in media Query (for mobile) whether the menu is displayed or closed
    const [activeIndex, setActiveIndex] = useState(0); // The side bar actove handle

     const handleClick = (index) => {
        setActiveIndex(index);
      };
    return(
        <body className={theme === 'lightmode' ? 'light-theme-variables' : 'dark-theme-variables'}>
        <div className='container'>
            <aside className={cls}> {/* class of aside in media Query (for mobile) whether the menu is displayed or closed */}
                <div className='top'>
                    <div className='logo'>
                        <img src={theme === 'lightmode' ? lightModeLogo : darkModeLogo } />
                    </div>
                    <div className='close' onClick={() => setCls('closed')} >
                        <span className={myIcon}>close</span>
                    </div>
                </div>
                <div className='sidebar'>
                    <a href="#" className={activeIndex === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
                        <span className={myIcon}>grid_view</span>
                        <h3>Dashboard</h3>
                    </a>
                    <a href="#" className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)} >
                        <span className={myIcon}>person_outline</span>
                        <h3>Students</h3>
                    </a>
                    <a href="#" className={activeIndex === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
                        <span className={myIcon}>inventory</span>
                        <h3>Vacancy Applications</h3> 
                    </a>
                    <a href="#" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
                        <span className={myIcon}>insights</span>
                        <h3>Analytics</h3> 
                    </a>
                    <a href="#" className={activeIndex === 4 ? 'active' : ''} onClick={() => handleClick(4)}>
                        <span className={myIcon}>mail_outline</span>
                        <h3>Messages</h3>
                        <span className='message-count'>26</span>
                    </a>
                    <a href="#" className={activeIndex === 5 ? 'active' : ''} onClick={() => handleClick(5)}>
                        <span className={myIcon}>report_gmailerrorred</span>
                        <h3>Reports</h3>
                    </a>
                    <a href="#" className={activeIndex === 6 ? 'active' : ''} onClick={() => handleClick(6)}>
                        <span className={myIcon}>settings</span>
                        <h3>Settings</h3>
                    </a>
                    <a href="#">
                        <span className={myIcon}>logout</span>
                        <h3>Logout</h3>
                    </a>
                </div>
            </aside>
            <main>
                <h1>Dashboard</h1>
                <div className="insights">
                    <div className='sales'>
                        <span className={myIcon}>analytics</span>
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
                        <span className={myIcon}>bar_chart</span>
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
                        <span className={myIcon}>stacked_line_chart</span>
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
                    <button onClick={() => setCls('clicked')}  id='menu-btn'>
                        <span className={myIcon}>menu</span>
                    </button>
                    <div className="theme-toggler">
                        <span className={isLightActive ? myIcon + ' active' : myIcon } onClick={() => setTheme('lightmode') + setIsLightActive(true) + setIsDarkActive(false)}>light_mode</span>
                        <span className={isDarkActive ? myIcon + ' active' : myIcon } onClick={() => setTheme('darkmode') + setIsDarkActive(true) + setIsLightActive(false)}>dark_mode</span>
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