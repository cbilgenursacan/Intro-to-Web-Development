import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from "react-bootstrap";
import "./AuthenticationCard.css";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const SignIn = (props) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const mailOnChange = async (e) => {
        await setMail(e.target.value);
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value);
    }

    const signIn = async () => {
        
        if(mail && password){
            const user = {
                mail: mail,
                password: password,
            }
            await axios.post("http://localhost:3001/sign_in", user)
                .then(res => {
                    localStorage.setItem("token", res.data.accessToken);
                    localStorage.setItem("userId", res.data.user._id);
                    localStorage.setItem("studentId", res.data.user.studentId);
                    localStorage.setItem("userType", res.data.user.userType);
                    navigate('/');
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    const preventDefault = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className="card">
            <h1 className="title">Sign In</h1>
            <hr></hr>
            <Form onSubmit={preventDefault}>
                <Form.Group className="mb-3 row" controlId="formBasicEmail">
                    <Form.Label className="comp col">E-mail:</Form.Label>
                    <Form.Control required className="col" type="email" placeholder="somebody@example.com" name="Email" value={mail} onChange={mailOnChange}/>
                </Form.Group>
                
                <Form.Group className="mb-3 row" controlId="formBasicPassword">
                    <Form.Label className="col">Password:</Form.Label>
                    <Form.Control required className="col" type="password" name="Password" placeholder="********" value={password} onChange={passwordOnChange}/>
                </Form.Group>

                <Button className="btn" variant="primary" type="click" onClick={signIn}>Sign In</Button>
            </Form>
        </div>
    )
}

export default SignIn;