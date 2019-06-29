import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTiers } from '../actions/pricingActions';
import PropTypes from 'prop-types';

class Pricing extends Component{

    componentDidMount(){
        this.props.getTiers();
    }

    render(){
        const { tiers } = this.props.tier;
        return(
            <div className="pricing-background">
                <div className="pricing-container">
                    {tiers.map(({ title, description, price}) => (
                    <div className="pricing-tiers">
                        <div className="pricing-tier-starter">
                            <h2>{title}</h2>
                            <p>
                            {description}
                            </p>
                        </div>
                        <div className="pricing-tier-starter-price">
                            <h2>{price}</h2>
                        </div>
                    </div>
                    ))}
                </div>
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