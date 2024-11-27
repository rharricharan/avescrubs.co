import React from "react";
import NavBar from "../components/NavBar";
import './home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <NavBar />
            <div className="home-hero">
                <div className="hero-top">
                    <h1 className="hero-h1">Enriching the lives of healthcare workers</h1>
                    <h2 className="hero-h2">A medical apparel and accessories brand<br />developed by a surgeon - all too familiar<br />with spending 10+ hours a day in scrubs.</h2>
                    <div className="hero-button-container">
                        <a className="secondary-button">product details</a>
                        <a className="primary-button">buy</a>
                    </div>
                </div>
                <div className="hero-video-container">
                    <div className="hero-darken"></div>
                    <video className="hero-home-img" src="/assets/home-video.mp4" autoPlay loop muted playsInline />
                </div>
            </div>
            <div className="section-opening">
                <div className="opening-text-container">
                    <h2 className="opening-text">
                        Healthcare workers <span className="highlight">dedicate</span> their life creating a healthier future. <span className="bottom-section">Now we are here to <span className="highlight-2">support</span> you.</span>
                    </h2>
                </div>
            </div>
        </div>
            
    );
};

export default Home;