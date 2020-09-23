import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectInput = (props) => (
  <Select
    classNamePrefix={props.className}
    className={props.className}
    disabled={props.disabled}
    id={props.id}
    name={props.name}
    placeholder={props.placeholder}
    labelKey={props.labelKey}
    valueKey={props.valueKey}
    value={props.value}
    options={props.options.map((option) =>
      typeof option === 'string' ? {label: option, value: option} : option
    )}
    onChange={props.selectHandler}
    multi={props.multi}
  />
);

SelectInput.defaultProps = {
  className: 'Select',
  placeholder: '',
  disabled: false,
  value: '',
  labelKey: 'label',
  valueKey: 'value',
  multi: false, // allow multiple select
};

SelectInput.propTypes = {
  multi: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectHandler: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape, null]),
};
export default SelectInput;
