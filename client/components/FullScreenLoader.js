import React from 'react';
import PropType from 'prop-types';

const Loader = (props = {}) => (
  <div>
    <div id="loader-wrapper">
      <div className="loader-container">
        <div className="loader-text">
          <h3 style={{color: props.color}}> {props.title || ''} </h3>
        </div>
        <div
          className="loader-spinner"
          style={{borderTopColor: props.loaderSpinnerColor || props.color}}
        />
        <div
          className="loader-logo-container"
          style={{background: props.loaderContainerColor || props.color}}
        >
          <img src="data:image/png;base64,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" />
        </div>
      </div>
    </div>
  </div>
);

Loader.propTypes = {
  title: PropType.string,
  color: PropType.string,

  loaderSpinnerColor: PropType.string,
  loaderContainerColor: PropType.string,
};

Loader.defaultProps = {
  title: '',
  color: '',
  loaderSpinnerColor: '',
  loaderContainerColor: '',
};

export default Loader;
