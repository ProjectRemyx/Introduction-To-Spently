import React from "react";

export default class Spently extends React.Component{
    render(){
        return(
            <div className="spently-background">
                <div className="spently-container">
                    <div>
                        <img src={require('../imgs/spently.png')} alt="Spently"/>
                        <h2>Supercharged Store E-mails App</h2>
                    </div>
                </div>
            </div>
        );
    }
}