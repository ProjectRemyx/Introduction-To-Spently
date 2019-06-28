import React from "react";

export default class About extends React.Component{
    render(){
        return(
            <div className="about-background">
                <div classNamme="about-column">
                    <div className="about-container">
                        <div className="about-row-item">
                            <img src={require('../imgs/Wave.png')} alt="Wave"/>                    
                        </div>
                        <div className="about-row-item">
                            <h2>
                                About Me
                            </h2>
                            <p>
                                I'm a big gamer and I love E-Sports. Currently, I'm playing Epic Seven
                                but before that I was playing Monster Hunter World and Apex Legends. 
                                Guitar is a hobby of mine as well as going to the gym. I am also
                                highly likely to take the title of: "The person you know who can eat the most food"
                                from your friend who's known for that.
                            </p>
                        </div>
                    </div>
                    <div className="about-container2">
                        <div className="about-row-item">
                            <h2>Quick Facts:</h2>
                        </div>
                        <div className="about-row-item">
                            <ul>
                                <li>Favorite Movie(s) - Fast and the Furious Franchise</li>
                                <li>Favorite Game - Monster Hunter World</li>
                                <li>Favorite Food - Shawarma</li>
                                <li>Favorite Color - Red</li>
                                <li>Favorite Animal - Wolf</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}