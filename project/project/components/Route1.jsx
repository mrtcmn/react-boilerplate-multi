import React from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { RouterPathsConst } from '@f/constants/routers.constant';
import { getAction } from '@service/StoreConfig';

const Route1 = ({ history, location, match, staticContext }) => {
  const dispatch = useDispatch();

  const countText = useSelector((state) => state.toolbar.countText);
  const count = useSelector((state) => state.toolbar.count);

  return (
    <div className="site-container">
      <div className="site-wrapper-w homepage-main">
        <div className="page-title">Route 1</div>
        <div onClick={() => history.push(RouterPathsConst.root)}>Home</div>
        <div onClick={() => history.push(RouterPathsConst.route2)}>Route 2</div>
        <div className="count-container">
          <div
            className="minus-button"
            onClick={() => dispatch(getAction().setCount({ count: count - 1 }))}
          >
            -
          </div>
          <div className="count-text">{count}</div>
          <div
            className="plus-button"
            onClick={() => dispatch(getAction().setCount({ count: count + 1 }))}
          >
            +
          </div>
        </div>
        <div>{countText}</div>
      </div>
    </div>
  );
};

Route1.propTypes = exact({
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  staticContext: PropTypes.any,
});
Route1.defaultProps = {
  staticContext: '',
};

export default Route1;
