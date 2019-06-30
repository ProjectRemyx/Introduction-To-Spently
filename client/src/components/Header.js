import React from "react";
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

export default class Header extends React.Component{
    render(){
        return(
            <div className="header-background">
                <div className="header-container">
                    <div>
                        <Fade left>
                            <h1>Hi Spently!</h1>
                        </Fade>
                    </div>
                    <div>
                        <Jump>
                            <img src={require('../imgs/Shy.png')} alt="Shy"/>
                        </Jump>
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