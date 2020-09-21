import React from 'react';
import PropTypes from 'prop-types';

const SimpleInput = (props) => (
  <input
    name={props.name}
    id={props.id}
    value={props.value}
    disabled={props.disabled}
    onBlur={(e) => {
      e.target.value = e.target.value.trim();
      props.handler(e);
    }}
    min={props.type === 'number' ? 0 : null}
    type={props.type}
    placeholder={props.placeholder}
    data-index={props.dataIndex}
  />
);

SimpleInput.defaultProps = {
  placeholder: '',
  dataIndex: '',
  disabled: false,
  value: '',
};

SimpleInput.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  dataIndex: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, null]),
};

export default SimpleInput;
