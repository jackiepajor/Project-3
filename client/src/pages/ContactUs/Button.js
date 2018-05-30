// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    static PropTypes = {
        email: PropTypes.string.isRequired,
        formValues: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole(event) {
        console.log('Form Values', this.props.formValues);
        this.setState({ isClicked: true });
    }

//     render() {
//         const href = `mailto:${this.props.email}`;
//         const subject = `?subject=Interested%20Client`;
//         const body = `&body=${this.props.formValues.message}`;
//         return (
//             <a
//              href={`${recipient}${subject}${body}`}
//              onClick={this.logFormDataToConsole}
//             >
//             Contact Us 
//             </a>
//         );
//     }
// }

render() {
    return (
        <button className="btn btn-hopper"
         disabled={this.state.isClicked}
         onClick={this.logFormDataToConsole}>
         Submit
         </button>
    );
  }
}

export default Button;
