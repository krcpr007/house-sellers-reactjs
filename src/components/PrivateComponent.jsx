import React from 'react'
import {Outlet ,Navigate} from 'react-router-dom'; 

function PrivateComponent() {
    const logedIn = false
    return logedIn? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateComponent
