import React ,{useState} from "react";
import { toast } from "react-toastify";
import {Link , useNavigate} from 'react-router-dom'; 
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import GAuth from '../components/GAuth';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const navigate = useNavigate()
  const onChange =(e)=>{
    setFormData((prevState)=>({
      ...prevState, 
      [e.target.id]:e.target.value, 

    }))

  }
  const onSubmit = async(e)=>{
    e.preventDefault(); 
    try {
      const auth= getAuth(); 
      const userCreadential = await signInWithEmailAndPassword(auth,email,password)
      if(userCreadential.user){
        navigate('/')
      }
      
    } catch (error) {
      toast.error('Invalid Creadential')

    }

  }
  return (
    <>
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Welcome Back!</p>
      </header>

      <form onSubmit={onSubmit}>   
        <input
          type='email'
          className='emailInput'
          placeholder='Email'
          id='email'
          value={email}
          onChange={onChange}
          
          />

        <div className='passwordInputDiv'>
          <input
            
            className='passwordInput'
            placeholder='Password'
            id='password'
            type={showPassword ? 'text' : 'password'}
             value={password}
            onChange={onChange}
          />
        
          <img
            src={visibilityIcon}
            alt='show password'
            className='showPassword'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div  >
        <Link to='/forgot-password' className='forgotPasswordLink'>
          Forgot Password
        </Link>

        <div className='signInBar'>
          <p className='signInText'>Sign In</p>
          <button type="submit"  className='signInButton'>
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
          </button>
        </div>
      </form>
      <GAuth />
      <Link to='/sign-in' style={{color:"red"}} className='registerLink'>
          Sign In Instead
        </Link>
    </div>
  </>
  );
}

export default SignIn;
