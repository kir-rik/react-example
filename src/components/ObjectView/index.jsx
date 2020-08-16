import React from 'react';
import PropTypes from 'prop-types';

const ObjectView = ({ data }) => (
  <div>
     {'{'}
    {Object.entries(data).map(([objKey, value]) => (
      <div style={{ paddingLeft: 20}} key={objKey}>
        {objKey}:{value}
      </div>
    ))}
     {'}'}
  </div>
);

ObjectView.propTypes = {
  data: PropTypes.shape({ [PropTypes.string]: PropTypes.number }),
};

export default ObjectView;
