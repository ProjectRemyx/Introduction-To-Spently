import React from "react";

export default class Pricing extends React.Component{
    render(){
        return(
            <div className="pricing-background">
                <div className="pricing-container">
                    <div className="pricing-tiers">
                        <div className="pricing-tier-starter">
                            <h2>STARTER</h2>
                            <p>
                                This package supports up to 50 monthly orders. You gain access to:  
                                email notifications template themes, recommended products, 
                                unique discount codes, store and customer analytics
                                as well as support docs in help center.

                            </p>
                        </div>
                        <div className="pricing-tier-starter-price">
                            <h2>$0.00</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}