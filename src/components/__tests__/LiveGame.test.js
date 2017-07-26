import React from 'react';
import { mount,shallow } from 'enzyme';
import LiveGame from '../LiveGame';
import processedEvents from '../../adapters/adapter';

it('renders without crashing', () => {
  let game = processedEvents.live[0].competitions[0]
  mount(
    <LiveGame
      statusDetail={game.status.detail}
      homeTeam={game.competitors[0]}
      awayTeam={game.competitors[1]}
      situation={game.situation}
      links={processedEvents.live[0].links}
      eventID={processedEvents.live[0].id.toString()}
    />);
});
