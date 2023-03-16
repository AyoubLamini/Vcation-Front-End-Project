import React, { useState} from 'react';

export const SideBar = () => {
    const [myIcon, setMyIcon] = useState('material-icons-sharp')
    const [activeIndex, setActiveIndex] = useState(0); // The side bar active handle

    const handleClick = (index) => {
       setActiveIndex(index);
     };
return(
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
)
}