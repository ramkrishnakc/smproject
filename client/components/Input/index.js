import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '../FontAwesomeLibrary';

import SimpleInput from './simple-input';
import TextArea from './text-area';
import PasswordStrength from './password-with-strength';
import PasswordWithIcon from './password-with-icon';
import Select from './select';
import MultiSelect from './multi-select';
import Radio from './radio';
import Checkbox from './checkbox';
import CheckboxMultiselect from './checkbox-multi-select';
import MultiText from './multi-text';

const simpleTypes = ['text', 'password', 'email', 'number'];

const Field = (props) => {
  const {type, title, style, className, error, ...rest} = props;
  const propObj = {type, ...rest};

  return (
    <div style={style} className={className}>
      {title && <p className="field-title">{title}</p>}
      <div className={`form-field ${error ? 'error' : ''}`}>
        {props.label && (
          <label htmlFor={props.id}>
            {props.label}
            <div className="required">
              {props.required && <FontAwesomeIcon icon="asterisk" />}
            </div>
          </label>
        )}
        {simpleTypes.includes(type) && <SimpleInput {...propObj} />}
        {type === 'text-area' && <TextArea {...propObj} />}
        {type === 'password-with-strength' && <PasswordStrength {...propObj} />}
        {type === 'password-with-icon' && <PasswordWithIcon {...propObj} />}
        {type === 'select' && <Select {...propObj} />}
        {type === 'multi-select' && <MultiSelect {...propObj} />}
        {type === 'radio' && <Radio {...propObj} />}
        {type === 'checkbox' && <Checkbox {...propObj} />}
        {type === 'checkbox-multi-select' && (
          <CheckboxMultiselect {...propObj} />
        )}
        {type === 'multi-text' && <MultiText {...propObj} />}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

Field.defaultProps = {
  className: 'form-field-wrapper',
  style: {},
  title: '',
  label: '',
  error: '',
  required: false,
};

Field.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Field;
