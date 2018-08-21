// Libraries
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = styled.aside`
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
  z-index: 2;
`;

const PrimaryList = styled.ul`
  margin: 0 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default class SidebarApp extends React.Component {
  render() {
    return (
      <Sidebar>
        <PrimaryList>
          <ListItem>
            <Link to="/">Dashboard</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </PrimaryList>
      </Sidebar>
    );
  }
}
