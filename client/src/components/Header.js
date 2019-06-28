import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div className="header-background">
                <div className="header-container">
                    <div>
                        <h1>Hi Spently!</h1>
                    </div>
                    <div>
                        <img src={require('../imgs/Shy.png')} alt="Shy"/>
                    </div>
                    <div>
                        <h2>I'm Jing Cheng,</h2>
                        <h2>Back End Web Developer</h2>
                        <h3>
                            E-Sports enthusiast, Gamer, Guitarist, 
                            <br></br>
                            Gacha game player, Food lover (quantity), 
                            <br></br>
                            Bodybuilder and Friend
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}