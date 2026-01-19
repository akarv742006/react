import React from 'react';
import './Footer.css';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="footer">
            <div className="footer__backToTop" onClick={scrollToTop}>
                <p>Back to top</p>
            </div>

            <div className="footer__links">
                <div className="footer__linkArea">
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>AK Science</p>
                </div>
                <div className="footer__linkArea">
                    <h3>Connect with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer__linkArea">
                    <h3>Make Money with Us</h3>
                    <p>Sell on AK</p>
                    <p>Sell under AK Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                </div>
                <div className="footer__linkArea">
                    <h3>Let Us Help You</h3>
                    <p>COVID-19 and AK</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>Help</p>
                </div>
            </div>

            <div className="footer__bottom">
                <img
                    src="/logo.png"
                    alt="AK Logo"
                />
                <span className="footer__copyright">
                    © 2026, AK Student Store, Inc. or its affiliates
                </span>
            </div>
        </div>
    )
}

export default Footer
