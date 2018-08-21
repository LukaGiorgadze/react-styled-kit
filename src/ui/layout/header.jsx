// Libraries
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Styled Components
const Header = styled.header`
  display: grid;
  grid-template-columns: 256px 1fr 200px;
  height: 72px;
  background-color: #fff;
  box-shadow: -10px 9px 21px 0 rgba(128, 152, 213, 0.08);
  grid-column: span 3;
  z-index: 3;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  padding: 23px 0;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 4px;
  color: #444a55;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #ef4e74;
  }
`;

const Middle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 500px;
  color: #aaa;
  border: 0;
  border-bottom: 1px solid #a2a5aa;
`;
const Search = styled.input`
  width: 500px;
  margin: 0;
  padding: 5px 40px 5px 10px;
  color: #aaa;
  border: 0;
  &::placeholder {
    color: #ccc;
  }
  outline: none;
`;


const Right = styled.div`
  color: #444a55;
`;

// Component
class HeaderApp extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          Icon
          <Logo>Example.com</Logo>
        </Left>
        <Middle>
          <SearchContainer>
            <Search type="text" placeholder="Search for&hellip;" />
            Icon
          </SearchContainer>
        </Middle>
        <Right>Account</Right>
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
