// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Field from "../../pages/ContactUs/Field.js";
import Button from "../../pages/ContactUs/Button.js";
import "./ContactUs.css";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // Verify 'this' is referring to Form instead of Field when calling 'this.updateField'
    this.updateField = this.updateField.bind(this);
  }

  // field = 'name', 'email' or 'message'
  // value = user input
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div id="content">
        <br /> <br /> <br /> <br /> <br />
        <div className="container" id="jumbo-field">
          {/* Name field */}
          <Field
          className="input"
          label="Name"
          onChange={(event) => this.updateField('name', event.target.value)} 
          value={this.state.name} />

          {/* Email field */}
          <Field
          className="input"
          label="Email" 
          onChange={(event) => this.updateField('email', event.target.value)} 
          value={this.state.email} />

          {/* Message field */}
          <Field 
          className="input"
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value)} 
          textarea ={true}
          value={this.state.message} />

          {/* Submit button */}
          <Button 
          email="jpajor@grad.bryant.edu"
          formValues={this.state} />
        </div>
        <br /> <br /> <br />
      </div>
    );
  }
}

export default Form;