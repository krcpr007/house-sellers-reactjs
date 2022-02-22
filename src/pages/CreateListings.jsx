import React , {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Spinner from '../components/Spinner';
function CreateListings() {
    const [geoLocation , setGeoLocation]= useState(true);
    const [loading , setLoading]= useState(false);
    const [formData, setFormData] = useState({
        type:"rent",
        name:"", 
        bedrooms:1, 
        bathrooms:1, 
        parking:false, 
        address:'',
        offer:false, 
        regularprice:'',
        discountedPrice:'', 
        images:{}, 
        lattitue:0, 
        longtitude:0
    })
    const auth = getAuth(); 
    const navigate = useNavigate(); 
    const isMounted = useRef(true)
    useEffect(()=>{
       if(isMounted){
         onAuthStateChanged(auth, (user)=>{
             if(user){
                 setFormData({...formData, userRef:user.uid})
             }else{
                 navigate('/sign-in')
             }
         })
       }
       return ()=>{
           isMounted.current= false; 
       }
    },[isMounted])
    if(loading){
        return <Spinner/>
    }
  return (
    <>
          
    </>
  )
}

export default CreateListings