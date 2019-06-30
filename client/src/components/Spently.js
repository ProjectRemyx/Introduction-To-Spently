import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';

export default class Spently extends React.Component{
    render(){
        return(
            <div className="spently-background">
                <div className="spently-divider">
                    <ScrollableAnchor id={'spentlySection'}>
                        <h2>Enough about me, let's talk about Spently!</h2>
                    </ScrollableAnchor>
                </div>
                <div className="spently-container">
                    <div className="spently-intro">
                        <a href="https://spently.com/"><img src={require('../imgs/spently.png')} className="spently-img" alt="Spently"/></a>
                        <h2>Supercharged Store E-mails App</h2>
                        <h3>Designed for:</h3>
                        <div className="shopify-container">
                            <img src={require('../imgs/shopify_white.png')} className="shopify-img" alt="Spently"/>
                        </div>
                    </div>
                    <div className="spently-row">
                        <div>
                            <video className="spently-video" autoplay="true" loop="true" muted="true">
                                <source src={require('../imgs/Main.mp4')}  type="video/mp4"/>
                            </video>
                        </div>
                        <div className="spently-description">
                            <Pulse>
                                <h2 className="title">Drive repeat purchases.</h2>
                            </Pulse>
                            <Zoom>
                                <h3 className="subtitle-one">Shopify Notification Emails</h3>
                                <ul>
                                    <li>Fully customizable</li>
                                    <li>Event-based upsells</li>
                                    <li>Discounts</li>
                                    <li>Referrals</li>
                                </ul>
                                <h3 className="subtitle-two">Automated Follow-up Emails</h3>
                                <ul>
                                    <li>Purchases</li>
                                    <li>Shipments</li>
                                    <li>Abandoned checkout</li>
                                </ul>
                                <h3 className="subtitle-three">Analytics Dashboard</h3>
                                <ul>
                                    <li>Measure performance and conversions</li>
                                    <li>Get insight into opens, clicks and ROI from notifications</li>
                                    <li>Improve your business with statistics</li>
                                </ul>
                                <h3 className="subtitle-four">Email Template Builder</h3>
                                <ul>
                                    <li>Customizable themes</li>
                                    <li>Drag and drop</li>
                                </ul>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}