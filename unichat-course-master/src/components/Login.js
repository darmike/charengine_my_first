import React from "react";
import {FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import MyComponent from "./api"

import { auth } from '../firebase'

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth';

const Login = () => {
    return (
        <div id="Login-page">
            <div id="Login-card">
                <h2>Welcome to my chat</h2>
                <MyComponent/>  
                <div 
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)}
                >
                    <GoogleOutlined /> Sign In with Google

                </div>
                
                <p>
                <div 
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider)}
                >
                    <FacebookOutlined /> Sign In with facebook

                </div>  
                </p>
                </div>
        </div>
    );
}

export default Login;


