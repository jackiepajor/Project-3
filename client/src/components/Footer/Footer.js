import React from "react";
import "./Footer.css";

const Footer = props => (
    <footer className="page-footer font-small unique-color-dark pt-0" >
    
                <div className="footer-color">
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="mb-0 white-txt" id="get-connected">Stay connected with us on social!</h6>
                        </div>
                        <div className="col-md-6 text-md-right" id="social">
                            <a className="footer-link" href=""><i className="fa fa-github"></i></a>
                            <a className="footer-link" href=""><i className="fa fa-facebook"></i></a>
                            <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
                            <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
                            <a className="footer-link" href=""><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>      
                </div>
                <div id="green-line"></div>
    
                <div className="container" id="lower-footer">
    
                    <div className="row">
                        <div className="col-lg-3">
                            <h6 className="text-uppercase font-weight-bold footer-header">
                                <strong>Grasshopper</strong>
                            </h6>
                            <hr className="underline mb-4 mt-0 d-inline-block mx-auto" />
                            <p className="footer-txt">We believe that a passion for learning will result in infinite growth and success</p>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="text-uppercase font-weight-bold footer-header">
                                <strong>About Us</strong>
                            </h6>
                            <hr className="underline mb-4 mt-0 d-inline-block mx-auto" /> 
                            <p className="footer-txt">
                                <a href="" className="footer-link">Our Team</a>
                            </p> 
                            <p className="footer-txt">
                                <a href="" className="footer-link">Blog</a>
                            </p> 
                        </div>
                        <div className="col-lg-3">
                            <h6 className="text-uppercase font-weight-bold footer-header">
                                <strong>Legal</strong>
                            </h6>
                            <hr className="underline mb-4 mt-0 d-inline-block mx-auto" /> 
                            <p className="footer-txt">
                                <a href="" className="footer-link">Privacy Policy</a>
                            </p> 
                            <p className="footer-txt">
                                <a href="" className="footer-link">Terms of Use</a>
                            </p>   
                        </div>
                        <div className="col-lg-3">
                            <h6 className="text-uppercase font-weight-bold footer-header">
                                <strong>get in touch</strong>
                            </h6>
                            <hr className="underline mb-4 mt-0 d-inline-block mx-auto" />  
                            <p className="footer-txt">
                                <a href="" className="footer-link">Get Involved</a>    
                            </p> 
                            <p className="footer-txt">
                                <a href="" className="footer-link">Contact</a>
                            </p>  
                        </div>
                    </div>
    
                    
    
                </div>
    
                <div className="py-3 text-center" id="footer-copyright">
                    © 2018 Copyright:
                    <a href="/" className="footer-link">
                        <strong> Grasshopper.com</strong>
                    </a>
                </div>
            </footer>
      );

export default Footer;