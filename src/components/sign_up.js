import React from 'react';

function check_inputs()
{

}

export default function sign_up()
{   
    return(
        <div className="sign_up">
            <div className='sign_up_container'>
                <h1>Sign Up</h1>
                <div className='input_container'>
                    <h4>First Name</h4>
                    <p className='error' id='no_first_name'>*Please enter a first name</p>
                    <input type="text" className="sign_in_ta"/>
                    <h4>Last Name</h4>
                    <p className='error'id='no_last_name'>*Please enter a last name</p>
                    <input type="text" className="sign_in_ta"/>
                    <h4>Username</h4>
                    <p className='error' id='no_username'>*Please enter a username</p>
                    <input type="text" className="sign_in_ta"/>
                    <h4>Password</h4>
                    <p className='error'id='no_password'>*Please enter a password</p>
                    <input type="password" className="sign_in_ta"/>
                    <h4>Confirm Password</h4>
                    <p className='error'>*Password does not match</p>
                    <input type="password" className="sign_in_ta"/> 
                </div>
                <div className='buttons_div'>
                    <button className='buttons' onClick={check_inputs()}>Sign Up</button>
                    <button className='buttons'>Back</button>
                </div>
            </div>
        </div>
    )
}