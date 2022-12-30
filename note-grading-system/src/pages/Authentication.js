import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SignIn from "../components/AuthenticationCards/SignIn";
import SignUpStudent from "../components/AuthenticationCards/SignUpStudent";
import SignUpExpert from "../components/AuthenticationCards/SignUpExpert";
import './css/Authentication.css'
import axios from "axios";
const Authentication = () => {
    
    return(
        <div className="authentication">
            <SignIn/>
            <p className="text-muted">Or if you don't have an account yet..</p>
            <SignUpStudent/>
            <p className="text-muted"> Expert users must by validated bu system admin.</p>
            <SignUpExpert/>
        </div>
    )
}

export default Authentication;