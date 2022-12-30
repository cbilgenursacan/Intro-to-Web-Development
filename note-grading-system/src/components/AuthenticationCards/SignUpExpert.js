import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import './AuthenticationCard.css';

const SignUpExpert = () => {
    return(
        <div className="card">
            <h1>Sign Up As an Expert</h1>
            <hr/>
            <Form>
                <FormGroup className="row">
                    <FormLabel className="col">Name Surname:</FormLabel>
                    <FormControl required className="mb-3 col" type="text" name="Name"/>
                </FormGroup>

                <FormGroup className="row mb-3">
                    <FormLabel className="col">E-mail:</FormLabel>
                    <FormControl required className="col" type="email" name="Email" placeholder="somebody@example.com"/>
                </FormGroup>

                <FormGroup className="row mb-3">
                    <FormLabel className="col">Password:</FormLabel>
                    <FormControl required className="col" type="text" name="Password" placeholder="********"></FormControl>
                </FormGroup>

                <Button type="submit" variant="success">Sign Up</Button>
            </Form>
        </div>
    )
}

export default SignUpExpert;