import React from 'react';
import { shallow } from 'enzyme';
import GridContainer from './gridContainer';


// Grid Container Smoke test

it('renders without crashing', () => {
  shallow(<GridContainer />)
});