import React from 'react';
import { mount,shallow } from 'enzyme';
import ScheduledGame from '../ScheduledGame';
import processedEvents from '../../adapters/adapter';

it('renders without crashing', () => {
  let game = processedEvents.scheduled[0].competitions[0]
  mount(
    <ScheduledGame
      statusDetail={game.status.detail}
      homeTeam={game.competitors[0]}
      awayTeam={game.competitors[1]}
      links={processedEvents.scheduled[0].links}
    />);
});
