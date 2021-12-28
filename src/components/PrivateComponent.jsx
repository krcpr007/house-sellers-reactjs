import React from 'react'
import {Outlet ,Navigate} from 'react-router-dom'; 
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'
export const PrivateComponent = ()=> {
    const { loggedIn, checkingStatus } = useAuthStatus()
    if(checkingStatus){
        return <Spinner/>
    }
    return loggedIn? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateComponent
