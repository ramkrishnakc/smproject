import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '../FontAwesomeLibrary';

const PasswordWithIcon = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="password-with-icon-wrapper">
      <input
        name={props.name}
        id={props.id}
        value={props.value}
        disabled={props.disabled}
        onBlur={(e) => {
          e.target.value = e.target.value.trim();
          props.handler(e);
        }}
        type={show === true ? 'text' : 'password'}
        placeholder={props.placeholder}
        data-index={props.dataIndex}
      />
      {/* eslint-disable-next-line */}
      <span onClick={() => setShow(!show)} className="password-show-icon">
        {show ? (
          <FontAwesomeIcon icon="eye" />
        ) : (
          <FontAwesomeIcon icon="eye-slash" />
        )}
      </span>
    </div>
  );
};

PasswordWithIcon.defaultProps = {
  value: '',
  disabled: false,
  placeholder: '',
  dataIndex: '',
};

PasswordWithIcon.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  dataIndex: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default PasswordWithIcon;
