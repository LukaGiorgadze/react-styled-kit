import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Contact = () => (
  <div>
    <h1>Contact...</h1>
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
)(Contact);
