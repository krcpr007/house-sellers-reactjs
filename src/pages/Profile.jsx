import React, { useRef } from 'react'
import {useEffect ,useState} from 'react'; 
import {getAuth ,updateProfile } from 'firebase/auth'; 
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg';
import homeIcon from '../assets/svg/homeIcon.svg';
import { toast } from 'react-toastify';
import {useNavigate , Link} from 'react-router-dom'
function Profile() {
    const auth = getAuth(); 
    const [changeDetails, setChangeDetails]= useState(false); 

    const [formData, setFormData] = useState({
        name:auth.currentUser.displayName, 
        email:auth.currentUser.email, 
    }); 
    const {name, email} =formData; 
    const navigate = useNavigate();
    const onLogout=()=>{
        auth.signOut(); 
        navigate('/sign-in')

    }
    const onSubmit = async()=>{
        try {
            if(auth.currentUser.displayName !==name){
                //update displayeName in firebase 
                await updateProfile(auth.currentUser, {
                    displayName:name
                })
            }
            //update in firestore 
            const userRef =doc(db, 'users',auth.currentUser.uid)
            await updateDoc(userRef, {
                name
            })
        } catch (error) {
            toast.error('Some went Wrong!!')
        }
    }
    const onChange =(e)=>{
        setFormData((prevState)=>({
            ...prevState, 
            [e.target.id]:e.target.value, 
        }))
    }
    return (
        <div className="profile">
            <header className="profileHeader">
             <p className='pageHeader'>My Profile</p>
             <button type='buttone' className='logout' onClick={onLogout}>LogOut</button>
            </header>
            <main>
          <div className="profileDetailsHeader">
              <p className="profileDetailsText">Personal Details</p>
              <p className='changePersonalDetails' onClick={()=>{
                  changeDetails && onSubmit()
                  setChangeDetails((prevState)=>!prevState)
              }}>
                  {changeDetails? 'Done':"Change"}
              </p>
          </div>
          <div className="profileCard">
              <form action="">
                  <input type="text" name="name" id="name" className={!changeDetails?'profileName':'profileNameActive'}  disabled={!changeDetails}
                  value={name}
                  onChange={onChange}/>
                  
                  <input type="text" name="email" id="email" className={!changeDetails?'profileEmail':'profileEmailActive'}  disabled={!changeDetails}
                  value={email}
                //   onChange={onChange}
                  
                  />
              </form>
          </div>
          <Link to="/create-listing" className='createListing'>
            <img src={homeIcon} alt = 'home' />
            <p>Sell or rent your home</p>
            <img src={arrowRight} alt="" />
          </Link>
            </main>
        </div>
    )
}

export default Profile
