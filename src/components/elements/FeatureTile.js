import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    textHeade: PropTypes.string,
    textContent: PropTypes.string,
    imageLink: PropTypes.node
}

const defaultProps = {
    textHeade: undefined,
    textContent: undefined,
    imageLink: undefined
}

const FeatureTile = ({
  textHeader,
  textContent,
  imageLink,
  ...props
}) => {

  return (
    <div className="tiles-item reveal-from-bottom">
        <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
            
            {imageLink}
        </div>
        <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">
            {textHeader}
            </h4>
            <p className="m-0 text-sm">
            {textContent}
            </p>
        </div>
        </div>
    </div>
  );
}

FeatureTile.propTypes = propTypes;
FeatureTile.defaultProps = defaultProps;

export default FeatureTile;