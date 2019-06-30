import React from "react";

export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <div className="quote-background">
                <div className="quote-container">
                    <div>
                        <h2>
                            "People who are crazy enough to think they can change the
                            world, are the ones who do." - Rob Siltanen
                        </h2>
                    </div>
                </div>
                </div>
                <div className="skills-background">
                    <div className="outro-divider">
                            <img src={require('../imgs/thumbsup.png')} className="rabbit-img" alt="Rabbit headshot"/>
                        <h2> 
                            <h2 className="skills-title">Pleased to meet you all!</h2>
                        </h2>
                        <h3>- Jing Cheng</h3>
                    </div>
                </div>
            </div>
        );
    }
}