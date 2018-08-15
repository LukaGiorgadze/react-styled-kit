import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const About = () => (
  <div>
    <h1>About...</h1>
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
)(About);
