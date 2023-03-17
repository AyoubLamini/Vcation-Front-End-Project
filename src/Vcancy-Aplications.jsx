import React, { useState} from 'react';
import './AdminDashboard.css';
import './Vacansy-FullTable.css';

import {SideBar} from './Dashboard-Sidebar' 
import { RightTopBar } from './Dashboard-Right'; 
import { AsideTop } from './Dashboard-Aside-Top'; 
import { VacancyTable } from './Vacansy-FullTable';
function AdminDashboard () {
    const [theme, setTheme] = useState('lightmode')
    const [isLightActive, setIsLightActive] = useState(true)
    const [isDarkActive, setIsDarkActive] = useState(false)
    const [cls, setCls] = useState(); 
    return(
        <body className={theme === 'lightmode' 
        ? 'light-theme-variables' 
        : 'dark-theme-variables'
        }>
        <div className='container'>
                <aside className={cls}> {/* class of aside in media Query (for mobile) whether the menu is displayed or closed */}
                    <AsideTop 
                    setCls={setCls}
                    theme={theme} 
                    />
                    <SideBar />
                </aside>
                <main>
                    <h1>Applications</h1>
                    <div className="recent-applications">
                        <VacancyTable />
                    </div>
                </main>
                <div className="right">
                <RightTopBar
                        theme={theme}
                        setTheme={setTheme}
                        isLightActive={isLightActive}
                        setIsLightActive={setIsLightActive}
                        isDarkActive={isDarkActive}
                        setIsDarkActive={setIsDarkActive}
                        setCls={setCls}    />
                </div>

        </div>
    </body>
        
    )
}
export default AdminDashboard;