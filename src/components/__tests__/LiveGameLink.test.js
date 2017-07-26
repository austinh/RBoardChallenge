import React from 'react';
import { mount,shallow } from 'enzyme';
import LiveGameLink from '../LiveGameLink';

it('renders without crashing', () => {
  let props={link:{href:"http://test"},gameID:"21335"}
  shallow(
        <LiveGameLink
          {...props}
          />);
});
