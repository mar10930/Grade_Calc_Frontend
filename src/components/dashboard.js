import  created_account  from "./sign_up";
import React from 'react';
import {useContext} from 'react';
import {StudentContext} from './Objects/StudentContext';



export default function dashboard()
{
    const{student, set_student}= useContext(StudentContext);
    return(
        <div className="dashboard-container">
            <h1>{student}</h1>
        </div>
    )
}
