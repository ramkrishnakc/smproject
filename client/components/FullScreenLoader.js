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
        />
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
