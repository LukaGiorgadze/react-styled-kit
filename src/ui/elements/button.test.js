import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button } from './button';

test('it works', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
