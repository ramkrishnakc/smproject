import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (
  <textarea
    rows={props.textareaRows}
    style={props.inputStyle}
    name={props.name}
    id={props.id}
    value={props.value}
    disabled={props.disabled}
    onChange={props.handler}
    onBlur={(e) => {
      e.target.value = e.target.value.trim();
      props.handler(e);
    }}
    type={props.type}
    placeholder={props.placeholder}
    data-index={props.dataIndex}
  />
);

TextArea.defaultProps = {
  placeholder: '',
  dataIndex: '',
  disabled: false,
  value: '',
  textareaRows: 10,
  inputStyle: {},
};

TextArea.propTypes = {
  textareaRows: PropTypes.number,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  dataIndex: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, null]),
  inputStyle: PropTypes.objectOf(PropTypes.any),
};

export default TextArea;
