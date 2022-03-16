import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RouterPathsConst } from '@f/constants/routers.constant';

class HomepageView extends Component {
  render() {
    const { history, location, match, staticContext } = this.props;

    return (
      <div className="site-container">
        <div className="site-wrapper-w homepage-main">
          <div className="page-title">Home</div>
          <div onClick={() => history.push(RouterPathsConst.route1)}>
            Route 1
          </div>
        </div>
      </div>
    );
  }
}

HomepageView.propTypes = exact({
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  staticContext: PropTypes.any,
});
HomepageView.defaultProps = {
  staticContext: '',
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomepageView));
