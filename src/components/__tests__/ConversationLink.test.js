import React from 'react';
import { mount,shallow } from 'enzyme';
import ConversationLink from '../ConversationLink';

it('renders without crashing', () => {
  shallow(<ConversationLink link="test" />);
});
