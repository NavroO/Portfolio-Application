import React, { Component } from 'react';
import '../CSS/About.css';



class About extends Component {
    render() {
        return (
            <div>

                <div className="Proflie">
                    <div className="redBox"></div>
                    <div className="Profile"></div>
                </div>

                <div className="History">
                    <div className="label"></div>
                    <p className="name">I’m Tomasz Nawrocki</p>
                    <p className="desc">I’m Junior Full Stack Developer Based In Katowice</p>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi enim fugit cumque sit quos ad repellat ex.
                    Exercitationem repellendus dolorum magni nam qui quam nostrum dolor, vel maiores autem in!</p>
                </div>

            </div>
        );
    }
}

export default About;

