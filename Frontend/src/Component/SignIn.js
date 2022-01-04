import React from "react";
import { Row } from "react-bootstrap";
import SignInEmail from "./SignIn/SignInEmail";
import './SignIn/Sign.css';

const SignIn = () => {
    return (
        <div className="container-fluid">
        <Row>
            <div className="col-1 col-sm-2 col-md-3 col-xl-4">

            </div>
            <div className="col-10 col-sm-8 col-md-6 col-xl-4 border border-grey rounded mt-5 mb-3 py-4 px-5">
                <img src="https://th.bing.com/th/id/R.4e2e37ed4ec08d8010b697b092647d57?rik=WJ7Ux6KtttKItg&pid=ImgRaw&r=0" className="googleImage mx-auto"/>
                <SignInEmail/>
            </div>
            <div className="col-1 col-2 col-md-3 col-xl-4">

            </div>
        </Row>
        <Row>
            <div className="col-1 col-sm-2 col-md-3 col-xl-4">

            </div>
            <div className="col-10 col-sm-8 col-md-6 col-xl-4 ">
                <Row>
                    <div className="col-6 form-group">
                        <select className="w-100 border-white form-control">
                            <option>English (United Kingdom)</option>
                            <option>English (United Kingdom)</option>
                        </select>
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        Help
                    </div>
                    <div className="col">
                        Privacy
                    </div>
                    <div className="col">
                        Terms
                    </div>
                </Row>
            </div>
            <div className="col-1 col-2 col-md-3 col-xl-4">

            </div>
        </Row>
        </div>
    ); 
}

export default SignIn;