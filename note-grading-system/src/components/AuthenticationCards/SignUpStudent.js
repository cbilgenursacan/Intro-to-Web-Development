import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import './AuthenticationCard.css';
import  Axios from "axios"
const SignUpStudent = () => {

    /*const deneme = async () =>{
        await Axios.get("http://localhost:3001/getAllUsers"
        ).then(res =>{
            console.log(res);
        })
    }
    useEffect(() =>{
        deneme()
    },[])*/
    return(
        <div className="card">
            <h1>Sign Up As a Student</h1>
            <hr/>
            <Form>
                <FormGroup className="row">
                    <FormLabel className="col">Name Surname:</FormLabel>
                    <FormControl required className="mb-3 col" type="text" name="Name"/>
                </FormGroup>

                <FormGroup className="row">
                    <FormLabel className="col">Student Id:</FormLabel>
                    <FormControl required className="mb-3 col" type="number" name="StudentId"/>
                </FormGroup>

                <FormGroup className="row mb-3">
                    <FormLabel className="col">E-mail:</FormLabel>
                    <FormControl required className="col" type="email" name="Email" placeholder="somebody@example.com"/>
                </FormGroup>

                <FormGroup className="row mb-3">
                    <FormLabel className="col">Password:</FormLabel>
                    <FormControl required className="col" type="text" name="Password" placeholder="********"/>
                </FormGroup>

                <Button type="submit" variant="success">Sign Up</Button>
            </Form>
        </div>
    )
}

export default SignUpStudent;