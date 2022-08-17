import  created_account  from "./sign_up";
import React from 'react';
import {useContext,useRef} from 'react';
import {StudentContext} from './Objects/StudentContext';



export default function dashboard()
{
    let course = {
        name: "nil",
        grade: 0
    };

    let course_name= useRef(null);

    function add_classlist()
    {
        alert(course_name.current.value);
    }

    const{student, set_student}= useContext(StudentContext);
    var student_obj = JSON.parse(student);
    return(
        <div className="dashboard-container">
            <h2 className="greeting">Welcome First name</h2>
            <div className="class_headers">
                <div className="class_name">
                    <h3>class name</h3>
                </div>
                <div className="current_grade">
                    <h3>current grade</h3>
                </div>
            </div>
            <div className="classes">
                <div className="classes_scroll">
                </div>
            </div>
            <div className="add_class">
                <div className="add_class_input">
                    <p>Class Name:</p>
                    <input type="text" className="class_name_input" placeholder="Class Name" ref={course_name}/>
                </div>
                <button type="button" className="submit_class" onClick={add_classlist}>Add Class</button>
            </div>
        </div>
    )
}
