import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
export default function sign_in_card()
{
    return(
        <div className='sign_in_card'>
            <h2>Sign In</h2>
            <div className= 'account_div'>
                <h4 className='username'>Username</h4>
                <input className='sign_in_ta' placeholder='Enter username'/>
                <h4 className='password'>Password</h4>
                <input className='sign_in_ta' placeholder='Enter password'/>
            </div>

            <div className='button_div'>
                <button className='buttons'>Sign In</button>
                <Link to={'/createAccount'}>
                    <button className='buttons'>Create Account</button>
                </Link>
            </div>
        </div>
    )
}