import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import MainRouter from '@f/views/MainRouter';
import { connect } from 'react-redux';

import '@asset/styles/project/frontend_main.sass';

class App extends React.Component {
  render() {
    return (
      <div className="site-all">
        <MainRouter />
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
