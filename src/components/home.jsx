import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Home...</h1>
  </div>
);

// States
const mapStateToProps = state => ({});

// Actions
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// Redux Connect
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
