// Libraries
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Routes
import { Routes } from 'src/routes';

// Normalize CSS
import 'public/css/normalize.css';

// Wrapper
class Wrapper extends React.Component {
  render() {
    return (
      <div>
        {<Routes/>}
      </div>
    );
  }
}

// States
const mapStateToProps = state => ({});

// Actions
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// Redux Connect
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);
