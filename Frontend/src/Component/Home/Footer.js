import './Home.css'

import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="px-4 py-5 bg-light">
                <Row>
                <img src="https://www.google.com/logos/doodles/2019/new-zealand-national-day-of-remembrance-6378272909164544-2x.png"
            alt="logo" className="footerImage"/>
                </Row>
                <Row>
                    <div className="my-2">
                        <span>
                            <Link className="mx-2 link links">Privacy</Link>
                        </span>
                        <span>
                            <Link className="mx-2 link links">Terms</Link>
                        </span>
                        <span>
                            <Link className="mx-2 link links">About Google</Link>
                        </span>
                        <span>
                            <Link className="mx-2 link links">Google Products</Link>
                        </span>
                        <span>
                            <Link className="mx-2 link links">Our Policy</Link>
                        </span>
                        <span>
                            <Link className="mx-2 link links">Privacy & Security</Link>
                        </span>
                    </div>
                </Row>
                <Row className="my-2">
                    <div className="col-2 col-lg-1">
                    <Link>
                        <span className="helpIcon">?</span>Help
                    </Link>
                    </div>
                    <select name="" id="" className="w-25">
                        <option value="">English</option>
                        <option value="">French</option>
                        <option value="">Hindi</option>
                    </select>
                </Row>
            </div>
        </>
    );
}

export default Footer;