import React from "react";
import { Button, Row } from "react-bootstrap";
import './Sign.css';

function SignInEmail() {
    return (
        <>
            <Row className="text-center">
                <h3 className="my-3">Sign in</h3>
                <h6>to continue to Gmail</h6>
            </Row>
            <Row>
            <div class="border bg-light mt-3 w-85 p-1 inputText text-field">
                <input type="text" required/>
                <label>Your email address</label>
            </div>
               
                <div className="text-primary p-0">
                    Forget email?
                </div>
            </Row>
            <Row>
                <p className="p-0 mt-4">
                    Not your computer? use Guest mode to sign in privately
                </p>
                <div className="text-primary p-0">
                    Learn more
                </div>
            </Row>
            <Row>
                <div className="col-10 p-0 my-4">Create account</div>
                <div className="col-2 my-3">
                    <Button>
                        Next
                    </Button>
                </div>
            </Row>
        </>
    );
}

export default SignInEmail;