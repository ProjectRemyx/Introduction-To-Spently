import React from "react";

export default class Spently extends React.Component{
    render(){
        return(
            <div className="spently-background">
                <div className="divider">
                    <h2>Enough about me, now let's talk about Spently!</h2>
                </div>
                <div className="spently-container">
                    <div>
                        <img src={require('../imgs/spently.png')} className="spently-img" alt="Spently"/>
                        <h2>Supercharged Store E-mails App</h2>
                    </div>
                </div>
            </div>
        );
    }
}