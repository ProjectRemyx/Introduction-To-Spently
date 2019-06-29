import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTiers } from '../actions/pricingActions';
import PropTypes from 'prop-types';

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
  } from "shards-react";

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
                    <Card style={{ maxWidth: "300px", height: "400px", margin: "1em" }}>
                        <CardHeader>{title}</CardHeader>
                        <CardBody>
                            <CardTitle>{price}</CardTitle>
                            <p>{description}</p>
                        </CardBody>
                    </Card>
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