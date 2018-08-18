// Libraries
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Routes
//import { Routes } from 'src/routes';

// Layout Components
import Header from 'ui/layout/header';
import Content from 'ui/layout/content';
import Sidebar from 'ui/layout/sidebar';

// CSS
import 'normalize.css';
import 'public/css/global.css';

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 256px 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

// Wrapper
class WrapperApp extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Sidebar>Navigation</Sidebar>
        <Content>This is a main component</Content>
      </Wrapper>
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
)(WrapperApp);
