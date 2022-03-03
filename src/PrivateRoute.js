import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const isPrivate = false;

    return(
        <Route {...rest} render={()=>isPrivate ? children : <Navigate to='/' />} ></Route> 
    )
}

export default PrivateRoute