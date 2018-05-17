import React, { Component } from 'react';

import Fields from "../../components/Fields.js";
import Button from "../../components/Button.js";



class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  render() {
    return (
      <div>
        {/* Name field */}
        <Field onChange={} value={} />
        {/* Email field */}
        <Field onChange={} value={} />
        {/* Message field */}
        <Field textarea onChange={} value={} />
        {/* Submit button */}
        <Button formValues={this.state} email="jpajor@grad.bryant.edu" />
      </div>
    );
  }
}