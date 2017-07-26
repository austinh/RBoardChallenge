import React from 'react';
import { mount,shallow } from 'enzyme';
import FinalGameLink from '../FinalGameLink';

it('renders without crashing', () => {
  let linksObject  ={recap:"http://test",boxscore:"http://test"}
  shallow(
        <FinalGameLink
          links={linksObject}
          />);
});
