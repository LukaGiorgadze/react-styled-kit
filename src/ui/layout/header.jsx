// Libraries
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Styled Components
const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  grid-column: span 3;
  height: 72px;
  background-color: #fff;
  box-shadow: -10px 9px 21px 0 rgba(128, 152, 213, 0.08);
`;

const Logo = styled.div`
  width: 181px;
  height: 24px;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 4px;
  color: #444a55;
  text-transform: uppercase;
`;

// Component
class HeaderApp extends React.Component {
  render() {
    return (
      <Header>
        <Logo>Company Logo</Logo>
      </Header>
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
)(HeaderApp);
