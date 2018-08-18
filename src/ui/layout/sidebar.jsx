// Libraries
import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.nav`
  background-color: #fff;
`;

export default class SidebarApp extends React.Component {
  render() {
    return <Sidebar>Navigation</Sidebar>;
  }
}
