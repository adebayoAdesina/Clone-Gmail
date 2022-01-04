import React from "react";
import { Button, Row } from "react-bootstrap";

export const HomeHeroDesktop = () => {
    return (
        <>
            <div className="px-5 pt-4 pb-4 bg-light">
                <Row className="mt-5 pt-5">
                    <div className="col-lg-6 py-5 px-5">
                        <h1 className="mt-4">Get more done with Gmail</h1>
                        <p className="my-4">Join video meetings with live captioning and screen sharing for up to 100 people—now with Google Meet in Gmail.</p>
                        <Button className="px-4">Create an Account</Button>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://lh3.googleusercontent.com/vVxPQ-ugz5QbYRbjQFZPMhXvZjz2tl2C-W4EK7prSi73Xu6-xUOJsvbhWo7MVl6nRW4a5EOjEOhhYzrFRAVh_Xp75ncGr95wcLd8=w0" alt="experience-gmail" className="heroImage"/>
                    </div>
                </Row>
            </div>
        </>
    );
}

const HomeHeroMobile = () => {
    return (
        <>
            <div className="px-5 pt-4 pb-4 bg-light">
                <div className="mt-4 pt-5 text-center">
                    <div className="col-12 py-5 px-5">
                        <h1 className="mt-4">Get more done with Gmail</h1>
                        <p className="my-4">Join video meetings with live captioning and screen sharing for up to 100 people—now with Google Meet in Gmail.</p>
                        <img src="https://lh3.googleusercontent.com/vVxPQ-ugz5QbYRbjQFZPMhXvZjz2tl2C-W4EK7prSi73Xu6-xUOJsvbhWo7MVl6nRW4a5EOjEOhhYzrFRAVh_Xp75ncGr95wcLd8=w0" alt="experience-gmail" className="heroImage"/>
                    </div>
                    <div className="col-12 mx-auto text-center">
                        <Button className="px-4">Created an Account</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeHeroMobile;