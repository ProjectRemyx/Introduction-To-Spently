import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTiers } from '../actions/pricingActions';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';

class Pricing extends Component{

    componentDidMount(){
        this.props.getTiers();
    }

    render(){
        const { tiers } = this.props.tier;
        return(
            <div className="pricing-background">
            <Bounce right cascade>
                <div className="pricing-container">
                        {tiers.sort((a, b) => (a.order > b.order)).map(({ title, description, price}) => (
                            <div className="plan">
                                <header>
                                    <h4 className="plan-title">
                                    {title}
                                    </h4>
                                    <div className="plan-cost"><span className="plan-price">{price}</span><span className="plan-type">/month</span></div>
                                </header>
                                <ul className="plan-features">
                                    <li><i className="ion-checkmark"> </i>{description.bulletOne}</li>
                                    <li><i className="ion-checkmark"> </i>{description.bulletTwo}</li>
                                    <li><i className="ion-checkmark"> </i>{description.bulletThree}</li>
                                    <li><i className="ion-checkmark"> </i>{description.bulletFour}</li>
                                    <li><i className="ion-checkmark"> </i>{description.bulletFive}</li>
                                </ul>
                                <div className="plan-select"><a href="https://apps.shopify.com/spently">Select Plan</a></div>
                            </div>
                        ))}
                </div>
            </Bounce>
            </div>
        );
    }
}

Pricing.propTypes = {
    getTiers: PropTypes.func.isRequired,
    tier: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    tier: state.tier
});

export default connect(mapStateToProps, { getTiers })(Pricing);