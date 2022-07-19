import React from 'react';
import {useState,useRef} from 'react';

export default function sign_up()
{  
    //All variables and references to form elements are initialized
    const sign_up_data = useRef(null);
    let first_ref = useRef(null);
    let last_ref = useRef(null);
    let email_ref =  useRef(null);
    let password_ref = useRef(null);
    let confirm_ref = useRef(null);
    let empty_email = false;
    let empty_password = false;
    let valid_sign_in = true;
    
    //Function to check if any of the input fields are empty
    const check_empty = () =>
    {
        let form_data = sign_up_data.current;

        if(form_data['first_name'].value === "")
        {
            first_ref.current.style.display = "block";
            //Set the boolean value to false if the sign in is empty
            valid_sign_in = false;
        }

        else
        {
            first_ref.current.style.display = "none";
        }

        if(form_data['last_name'].value === "")
        {
            last_ref.current.style.display = "block";
            valid_sign_in = false;
        }

        else
        {
            last_ref.current.style.display = "none";
        }

        if(form_data['email'].value === "")
        {
            email_ref.current.innerHTML = '*Please enter an email';
            email_ref.current.style.display = "block";
            valid_sign_in = false;
            empty_email = true;
        }

        else
        {
            email_ref.current.style.display = "none";
            empty_email = false;
        }
        

        if(form_data['password'].value === "")
        {
            password_ref.current.innerHTML = '*Please enter a password';
            password_ref.current.style.display = "block";
            valid_sign_in = false;
            //Set boolean to save that the password field was empty
            empty_password = true;
        }

        else
        {
            password_ref.current.style.display = "none";
            empty_password = false;
        }

        match_password(form_data['password'].value);

        //Check if the email field is empty, if so check if 
        //a valid email is entered
        if(empty_email === false)
        {
            //Check if email is valid
            valid_email(form_data['email'].value);
        }

        //If password is not empty, check if password is valid
        if( empty_password=== false)
        {
            //Check if the password is valid
            valid_password(form_data['password'].value);
        }

    }

    //Check if the password field matches the confirm password field
    const match_password = (password) =>
    {
        let form_data = sign_up_data.current;
        if(form_data['confirm_password'].value === password)
        {
            confirm_ref.current.style.display = 'none';
        }

        else{
            confirm_ref.current.style.display = 'block';
            valid_sign_in = false;
        }

    }
    
    //Check if the email is valid
    const valid_email = (email) =>
    {
        //Email regular expression for valid email addresses
        const email_regex = new RegExp('[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-z]{2,3}')
        
        //Check if the email is not valid
        if(email_regex.test(email) === false)
        {
            email_ref.current.innerHTML = 'Enter a valid email address';
            email_ref.current.style.display = 'block';
        }

        else
        {
            email_ref.current.style.display = 'none';
        }

    }


    const valid_password = (password) =>
    {
        //Regex for the valid password constraints
        const one_upper = new RegExp('(?=.*[A-Z])(?=.*?[a-z])(?=.*[#?!@$%^&*-])');

        //If the password field does not match the regex, display
        //invalid password message
        if(!one_upper.test(password))
        {
            password_ref.current.innerHTML = 'Invalid password';
            password_ref.current.style.display = 'block';
        }

        else{
            password_ref.current.style.display = 'none';
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
                        <h4>Email</h4>
                        <p className='error' ref={email_ref} id='no_email'>*Please enter an email</p>
                        <input type="text" className="sign_in_ta" id="email"/>
                        <h4>Password</h4>
                        <p className='error' ref={password_ref} id='no_password'>*Please enter a password</p>
                        <input type="password" className="sign_in_ta" id='password'/>
                        <h4>Confirm Password</h4>
                        <p className='error' ref={confirm_ref}>*Password does not match</p>
                        <input type="password" className="sign_in_ta" id='confirm_password'/> 
                        <ul className='list' id='password_list'>
                            <li className='constraints'>
                                Password must be at least 8 characters long.
                            </li>
                            <li className='constraints'>
                                Password must contain one upppercase letter.
                            </li>
                            <li className='constraints'>
                                Password must contain one digit.
                            </li>
                            <li className='constraints'>
                                Password must contain one special character (#?!@$%^&*-).
                            </li>
                        </ul>
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