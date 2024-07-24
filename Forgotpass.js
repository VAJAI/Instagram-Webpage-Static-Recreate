import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCircle,faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Forgotpass.css";
import { Link } from "react-router-dom";
export default function Forgotpass() {
  return (
    <>
      <div className="parent-02">
        <div>
          <span className="piccircle">
            <FontAwesomeIcon icon={faCircle} className="icons-01" />{" "}
            <FontAwesomeIcon icon={faLock} className="icon" />
          </span>
          <h5 className="content">Trouble logging in?</h5>
          <p className="content">
            Enter your email, phone, or username and we'll
            <br /> <span>send you a link to get back into your account.</span>
          </p>
          <input type="text" placeholder="Email, Phone or Username" />
          <br />
          <button type="button" className="button-4">
            Send login Link
          </button>
          <div>
            <Link to="/login" className="linkv">
              Can't reset your password?
            </Link>
          </div>
        </div>
        <div className="child-03">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>

        <div>
          <Link to='/signup' className="valuesign">Create new account</Link>
        </div>

        <div className="valuelog">
         <h1><Link to='/login' className="linked" >Back to login</Link></h1>
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
  );
}
