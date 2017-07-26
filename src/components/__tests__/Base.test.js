import React from 'react';
import { mount,shallow } from 'enzyme';
import Base from '../Base';

it('renders without crashing', () => {
  shallow(<Base />);
});
