import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props) => (
  <ul className="radio">
    {props.items.map((item) => {
      let label = item;
      let value = item;

      if (typeof item === 'object') {
        label = item[props.labelKey];
        value = item[props.valueKey];
      }

      return (
        <li key={value}>
          <input
            type={props.type}
            id={props.id}
            name={props.name}
            value={value}
            checked={props.value === value}
            onChange={props.handler}
            disabled={props.disabled}
          />
          <label htmlFor={props.id}>
            <div className="radio-label-text">{label} </div>
          </label>
        </li>
      );
    })}
  </ul>
);

Radio.defaultProps = {
  labelKey: 'label',
  valueKey: 'value',
  disabled: false,
  value: '',
  items: [],
};

Radio.propTypes = {
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, null]),
};

export default Radio;
