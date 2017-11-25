import React from 'react'
import { shallow } from 'enzyme';
import ContactItem from './contactItem';


// Grid Container Smoke test

it('renders without crashing', () => {
  shallow(<ContactItem />)
});