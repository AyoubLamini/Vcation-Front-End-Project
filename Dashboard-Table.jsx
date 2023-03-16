import React, { useState} from 'react';

export const MainTable = () => {
return(
    
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Application Number</th>
                                <th>Date</th>
                                <th>Duration</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>5 days</td>
                                <td className='warning'>Pending</td>
                                <td>14/03/2023</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>12 Days</td>                               
                                <td className='warning'>Pending</td>
                                <td>14/03/2023</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>7 Days</td>
                                <td className='warning'>Pending</td>
                                <td>14/03/2023</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Ayoub Lamini</td>
                                <td>1</td>
                                <td>14/03/2023</td>
                                <td>14 Days</td>
                                <td className='warning'>Pending</td>
                                <td>14/03/2023</td>
                                <td className='primary'>Details</td>
                            </tr>
                        </tbody>
                    </table>
                
)
}