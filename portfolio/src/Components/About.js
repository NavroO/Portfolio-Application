import React, { Component } from 'react';
import '../CSS/About.css';


/* TODO: Render this component under Welcome Component */
class About extends Component {
    render() {
        return (
            <div className="AboutDiv">
                <img className="HoverIMG"></img>
                <img className="Profile"></img>
                <div className="Label"></div>
                <p className="name">I’m Tomasz Nawrocki</p>
                <p className="desc">I’m Junior Full Stack Developer Based In Katowice</p>
                <p className="li">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi enim fugit cumque sit quos ad repellat ex. 
                Exercitationem repellendus dolorum magni nam qui quam nostrum dolor, vel maiores autem in!</p>
                <div className="Contact">
                
                </div>
            </div>
        );
    }
}

export default About;

