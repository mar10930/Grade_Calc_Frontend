import React from 'react';
import {useState,useRef} from 'react';

export default function sign_up()
{  
    const sign_up_data = useRef(null);
    let first_ref = useRef(null);
    let last_ref = useRef(null);
    let user_ref =  useRef(null);
    const check_empty = () =>
    {
        let form_data = sign_up_data.current;

        if(form_data['first_name'].value === "")
        {
            first_ref.current.style.display = "block";
        }

        else
        {
            first_ref.current.style.display = "none";
        }

        if(form_data['last_name'].value === "")
        {
            last_ref.current.style.display = "block";
        }

        else
        {
            last_ref.current.style.display = "none";
        }

        if(form_data['username'].value === "")
        {
            user_ref.current.style.display = "block";
        }

        else
        {
            user_ref.current.style.display = "none";
        }
    }
    return(
        <div className="sign_up">
            <div className='sign_up_container'>
                <h1>Sign Up</h1>
                <div className='input_container'>
                    <form ref={sign_up_data}>
                        <h4>First Name</h4>
                        <p className='error' ref={first_ref} id='no_first_name' >*Please enter a first name </p>
                        <input type="text" className="sign_in_ta" id='first_name' onChange/>
                        <h4>Last Name</h4>
                        <p className='error' ref={last_ref} id='no_last_name'>*Please enter a last name</p>
                        <input type="text" className="sign_in_ta" id='last_name'/>
                        <h4>Username</h4>
                        <p className='error' ref={user_ref} id='no_username'>*Please enter a username</p>
                        <input type="text" className="sign_in_ta" id="username"/>
                        <h4>Password</h4>
                        <p className='error'id='no_password'>*Please enter a password</p>
                        <input type="password" className="sign_in_ta"/>
                        <h4>Confirm Password</h4>
                        <p className='error'>*Password does not match</p>
                        <input type="password" className="sign_in_ta"/> 
                    </form>
                </div>
                <div className='buttons_div'>
                    <button className='buttons' onClick={check_empty}>Sign Up</button>
                    <button className='buttons'>Back</button>
                </div>
            </div>
        </div>
    )
}