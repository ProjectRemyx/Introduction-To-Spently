import React from "react";

export default class Quote extends React.Component{
    render(){
        return(
            <div className="quote-background">
                <div className="quote-container">
                    <div>
                        <h3>My Favorite Quote:</h3>
                    </div>
                    <div>
                        <h2>
                            "When you were made a leader you weren't given a crown,
                            you were given the responsibility to bring out the best
                            in others." - Jack Welch

                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}