import React from 'react';
import ReactDOM from 'react-dom';
import GridContainer from './gridContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridContainer />, div);
});