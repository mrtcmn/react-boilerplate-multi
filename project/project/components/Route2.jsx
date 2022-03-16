import React from 'react';
import { withRouter } from 'react-router-dom';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RouterPathsConst } from '@f/constants/routers.constant';

const Route2 = ({ history, location }) => {
  return (
    <div className="site-container">
      <div className="site-wrapper-w homepage-main">
        <div className="page-title">Route 2</div>
        <div onClick={() => history.push(RouterPathsConst.root)}>Home</div>
        <div onClick={() => history.push(RouterPathsConst.route1)}>Route 1</div>
      </div>
    </div>
  );
};

Route2.propTypes = exact({
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
});
Route2.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Route2));
