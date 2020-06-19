import React, { Component } from 'react';
import '../CSS/Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className="WelcomeDiv">
                <div className="bg"></div>

                <div className="Welcome_Text">
                    <div className="Red_Label"></div>
                    <p className="Text" id="hey">Hey There!</p>
                    <p className="Text" id="welcome">I’m <p className="name">Tomasz Nawrocki</p></p>
                    <p className="Text" id="city">Based In Katowice</p>
                </div>

                <div className="Skills">
                    <div className="label1"></div>
                    <div className="label2"></div>
                    <p className="skillText" id="WebDesigner">Web Designer</p>
                    <p className="skillText" id="WebDeveloper">Web Developer</p>
                    <p className="skillText" id="UI">UI/UX Designer</p>
                </div>

                <div className="Portfolio">
                    <p id="portfolio">Portfolio</p>
                </div>


            </div>
        );
    }
}

export default Welcome;
