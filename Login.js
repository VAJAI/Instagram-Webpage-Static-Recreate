import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faCopyright} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
export default function Login(){
  return (
    <>
        <div className='parent'>
        <div>
           <h1 className='title'>Instagram</h1>
           <input type='text' placeholder='Phone number, username, password'/>
           <br/>
           <input type='text' placeholder='Password'/>
           <br/>
           <Link to='/home'><button type='button' className='button-1'>Log in</button></Link>
        </div>
        <div className='child2'>
            <div></div>
            <span>OR</span>
            <div></div>
        </div>
        <div className='child3'>
        <FontAwesomeIcon icon={faFacebook} style={{color: "#0b598e",}} className='icons' />
          <a href="https://www.facebook.com/">Log in with Facebook</a>
          <br/>
          <br/>
          <Link to='/forgotpass' className='forgot'>Forgot Password?</Link>
        </div>
        </div>
    <div className='parent-1'>
     <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
    </div>

    <div className='parent-4'>
        <p className='f-1'>Get the app.</p>
        <div className='images'>
          <img src='gallery\GPW.png' alt='#' width="130px" height={54}/>
          <img src='gallery\MS.webp' alt='#' width="130px" height={45}/>
        </div>
    </div>

    <div className='parent-5'>
      <ul>
        <li>Meta</li>
        <li>About</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Help</li>
        <li>API</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Instagram Lite</li>
        <li>Threads</li>
        <li>Contact Uploading & Non-Users</li>
        <li>Meta Verified</li>
      </ul>
      <div className='copy'>
      <select typeof='dropdown'>
       <option>English</option>
       <option>Spanish</option>
       <option>Franch</option>
       <option>Italiy</option>
       <option>latin</option>
       <option>Russian</option>
      </select>
      <p><FontAwesomeIcon icon={faCopyright}/> 2024 Instagram From Meta</p>
      </div>
    </div>
    </>
  )
}
