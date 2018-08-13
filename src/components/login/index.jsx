import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import styled from "styled-components";

import { requestHelloWorld } from "actions/helloWorld";

import reactPng from "public/img/react.png";

const Button = styled.button`
  background: blue;
  border-radius: 8px;
  color: white;
  background-image: url(${reactPng});
`;

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Button onClick={this.props.requestHelloWorld}>Test Button 2</Button>
        <h1>{this.props.helloWorld}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  helloWorld: state.helloWorld
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHelloWorld }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
