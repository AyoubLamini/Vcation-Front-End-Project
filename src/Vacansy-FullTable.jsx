import React, { useState} from 'react';
export const VacancyTable = () => {

    const [cls, setCls] = useState(false); 
    const [decision, setDecision] = useState();
    const submitDecision = () => {
        console.log(decision)
    }
    return(
            <div className="applications">
                    <table>
                        <thead>
                            <tr >
                                <th>Student</th>
                                <th>App Number</th>
                                <th>Date</th>
                                <th>Duration</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-rows' onClick={() => setCls(!cls)}>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>5 days</td>
                                <td className='warning'>Pending</td>
                                
                            </tr>
                            <tr  className={cls === true ? 'decision clicked' : 'decision closed'}>
                                <td colSpan={2}>
                                    <button  className='approve' onClick={() => setDecision('Approved')}>Approve</button>
                                </td>
                                <td colSpan={3}>
                                    <button className='decline' onClick={() => setDecision('Rejected')}>Reject</button>
                                </td>
                             </tr>   
                            <tr className='table-rows'>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>12 Days</td>                               
                                <td className='warning'>Pending</td>
                                
                
                            </tr>
                            <tr className='table-rows'>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>7 Days</td>
                                <td className='warning'>Pending</td>
                                
                                
                            </tr>
                            <tr className='table-rows'>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>14 Days</td>
                                <td className='warning'>Pending</td>
                                
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    

)
}