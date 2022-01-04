import React, { useEffect, useState } from "react";

import './Home/Home.css';
import Home_Header_Desktop from "./Home/Header";
import { Home_Header_Mobile } from "./Home/Header";

import { Button, Row } from 'react-bootstrap';
import Footer from "./Home/Footer";
import { HomeHeroDesktop } from "./Home/Home_Hero";
import HomeHeroMobile from "./Home/Home_Hero";

const Home = () => {
    const [width, setWindowWidth] = useState(0);
    
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth({size: width});
    }

    useEffect(() => { 
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => 
        window.removeEventListener("resize",updateDimensions);
       
    }, [])

    console.log(width);
    

    return (
        <>
           
           {width.size > 992 ? <Home_Header_Desktop/> : <Home_Header_Mobile/>}
            {width.size > 992 ? <HomeHeroDesktop/> : <HomeHeroMobile/>}
            <div className="px-5 py-4">
                <Row>
                    <div className="col-12 text-center py-5 px-5">
                        <h2>Experience Gmail on any device</h2>
                        <p className="py-3">The ease & simplicity of Gmail, wherever you are.</p>
                        <p>
                            <img src="https://lh3.googleusercontent.com/6kdr7g-ziKhTh0iWIXncqJh6Zd8Z-dkntyVV10lni6ZyBC8Q7uzQeY4Xv7EIAH6b0EQkUD6cUrHC8-GCLma-ZJrdNp16cciXoP_N" alt="get it on google play" className="experienceImage mx-1"/>
                            <img src="https://lh3.googleusercontent.com/OBvpNtOKZRZjGFYGsmUrME8yMIjkk1BNQX89gt_lMN2afWCZDvE4SdZhPGXI72vDo-wWqML-8NDy2vU2zY2c6oOktAXZbcwU9ByMBw" alt="get it on app store" className="experienceImage mx-1"/>
                        </p>
                    </div>
                    <div className="col-12">
                        <img src="https://lh3.googleusercontent.com/PV8VkijrHZWfBrvC01RUIkNiH67CCPDfPA_Xck1AD8lMjCTGq5PyfoIkIRq2TwN7hGxlrtmCUTiWLWRgkYL-eR3RqNTtItcUiPrVBQ=w1000" alt="experience-gmail" className="w-100"/>
                    </div>
                </Row>
            </div>

            <div className="mx-5 pt-4 pb-0 bg-light">
                <Row>
                    <div className="col-12 text-center py-5 px-5">
                        <h2> Stay organized instantly</h2>
                        <p>See what’s new at a glance, and decide what you want to read and respond to.</p>
                        <p>
                            <img src="https://lh3.googleusercontent.com/90tzabprebAxv8Wv9pU_SDBje0X8tN_nQVdC6qPVcggutV2ajwbhKcvj1fQb2WQxUkuDpXcSGWq9i8desuxeTvyv7lr2vUmUcwF2JXo=w390" alt="stay-organized" className="stayOrganizedImage"/>
                        </p>
                    </div>
                </Row>
            </div>

            <div className="mx-5 py-4 m-3 bg-light">
                <Row>
                    <div className="col-12 text-center pt-5 px-5">
                        <h2>Never drop the ball</h2>
                        <p>Get nudges that remind you to follow up and respond to messages, so that nothing slips through the cracks.</p>
                        <p>
                            <img src="https://lh3.googleusercontent.com/xP3uPwxb0EQyeqGdjnKgoooe3xLSxQUlmUdYePlt_yj1DL1d--c-FTXtEW9-H_zz9B48klJ8C9vXsufcgEjmDKs_P5Wlv-mIgmilhQ=w390" alt="drop-ball" className="neverDropImage"/>
                        </p>
                    </div>
                </Row>
            </div>

            <div className="px-5 py-5">
                <Row>
                    <div className="col-12 col-lg-6 py-5 px-5">
                        <h2>Take action right from the inbox</h2>
                        <p>View attachments, RSVP to events, snooze messages and more without opening any emails.</p>
                    </div>
                    <div className="col-12 col-lg-6 py-5 px-5">
                        <img src="https://lh3.googleusercontent.com/eMssnzi4IyoZt6HzMXY08zo331ZHTIkoQxxQHE01r_tdFIRFYDkud-XAXGDZ5xqzzreeOLNoLALdIBkAh5K2Zc_sIe3UXQKs7eH7pQ=w0" alt="take-action" className="inboxImage"/>
                    </div>
                </Row>
            </div>

            <div className="mx-5 pt-4 bg-light">
                <Row>
                    <div className="col-12 text-center py-5 px-5">
                        <h2>Avoid suspicious emails</h2>
                        <p>Gmail blocks 99.9% of dangerous emails before they reach you. If we think something seems phish-y, you’ll get a warning.</p>
                        <p>
                            <img src="https://lh3.googleusercontent.com/Qx1j5oBpN4KcqXE9U9djCvHciXl-ryq7_KPBAvgUDlxcJUhBZxJBBa2aXWYz_fpShjtnNyYIio-HGrK_7759Ei2dIhSnsyvxjkS_=w390" alt="suspicious" className="avoidSuspiciousImage"/>
                        </p>
                    </div>
                </Row>
            </div>

            <div className="px-5 py-5 text-center">
                <Row>
                    <img src="https://lh3.googleusercontent.com/VS3B_qhOFTYsdyNfnlr98zg3HNjB_Gcs9bxVnaQO9MysAoBOXMHATClhRviImKKJV8RV-0s7hl8KeVQcij5Iagb1exHzt40x679l8Q=w0" alt="logo" className="gmailSectionLogo mx-auto"/>
                </Row>
                <Row>
                    <div className="col-12 my-3">
                        <h2>Get started with Gmail</h2>
                    </div>
                    <div className="col-12">
                        <Button className="px-4 py-2">Get Gmail</Button>
                    </div>
                </Row>
            </div>

            <Footer/>
        </>
    );
}

export default Home;