import React from 'react'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faCopyright} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <>
    <div className='parentsign'>
      <div className='parent-01'>
           <h1 className='title-1'>Instagram</h1>
           <p>Sign up to see photos and videos <br/> <span>from your friends.</span></p>
           <a href='https://www.facebook.com/'><button type='button' className='button-01'><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} className='icon-01' /> Log in with Facebook</button> <br/></a>
      </div>
      <div className='child-2'>
            <div></div>
            <span>OR</span>
            <div></div>
        </div>
      <div className='childname-3'>
           <input type='text' placeholder='Mobile number or email'/>
           <br/>
           <input type='text' placeholder='Full Name'/>
           <br/>
           <input type='text' placeholder='Username'/>
           <br/>
           <input type='text' placeholder='Password'/>
           <br/>

           <p>
           people who use our service may have uploaded <span>your contact information to Instagram.</span> <a href='https://www.facebook.com/help/instagram/261704639352628'>Learn <br/> More</a>
           </p>

           <p>
           By signing up, you agree to our <a href='https://help.instagram.com/581066165581870/?locale=en_US'>Terms</a>,<a href='https://www.facebook.com/privacy/policy'> Privacy <br/>Policy</a> and <a href='https://privacycenter.instagram.com/policies/cookies/'>Cookies Policy.</a>
           </p>
          <Link to='/login'><button type='button' className='button-1'>Sign up</button></Link> 
      </div>
    </div>

    <div className='parent-1'>
     <p>Have an Account? <Link to='/login'>Log in</Link></p>
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
