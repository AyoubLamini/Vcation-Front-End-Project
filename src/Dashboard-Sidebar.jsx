import React, { useState} from 'react';

export const SideBar = () => {
    const myIcon = 'material-icons-sharp'
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
        <a href="#" className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
            <span className={myIcon}>inventory</span>
            <h3>Vacancy Applications</h3>
            <span className='message-count'>26</span> 
        </a>
        <a href="#" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
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