// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => (
    <div className="container">
        <div className="">
            <label className="field-label">{props.label}</label>
        <input type="text" className="field-input"
            onChange={props.onChange}
            type={props.textarea ? 'textarea' : 'text'}
            value={props.value} />
        </div>
    </div>
);

Field.PropTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    textarea: PropTypes.bool.isRequired,
};

Field.defaultProps = {
    textarea: false,
};

export default Field;