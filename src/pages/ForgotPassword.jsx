import React , {useState} from "react";
import {Link} from 'react-router-dom'; 
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import { toast } from "react-toastify";
import {getAuth ,sendPasswordResetEmail} from 'firebase/auth'
function Explore() {
  const [email, setEmail]= useState('');
  const onChange = (e) => setEmail(e.target.value)
  const OnSubmit = async(e)=>{
    e.preventDefault()
    try {
      const auth= getAuth(); 
    await sendPasswordResetEmail(auth, email); 
    toast.success("Email was sent");
    } catch (error) {
      toast.error('Could not send reset email'); 
    }

  }
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={OnSubmit}>
              <input type="email" name="email" id="email" 
              placeholder="Email"
              className="emailInput"
              value={email}
              onChange={onChange}
              />
              <Link className="forgotPasswordLink" to='/sign-in'>
                Sign In
              </Link>
              <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Explore;
