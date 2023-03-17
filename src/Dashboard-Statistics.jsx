import React, {useState} from "react";
export const MainStatistics = () => {
    const myIcon = 'material-icons-sharp'
    return(
        <div className="statistics">
                    <div className='pending'>
                        <span className={myIcon}>pending_actions</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Pending Applications</h3>
                                <h1>25</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <b>81%</b>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                    {/*----------------End of Penidings -------------------------*/ }
                    <div className='approved'>
                        <span className={myIcon}>done</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Approved Applications</h3>
                                <h1>14</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <b>65%</b>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                    {/*----------------End of approved -------------------------*/ }
                    <div className='disapproved'>
                        <span className={myIcon}>close</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Disaproved Applications</h3>
                                <h1>11</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <b>35%</b>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                </div> 
    )
} 