import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <>Pls wait!!! Loading....</>;

export default ReactDelayRender({delay: 5000})(Loading);
