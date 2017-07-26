import React from 'react';
import { mount,shallow } from 'enzyme';
import FullLiveGame from '../FullLiveGame';
import processedEvents from '../../adapters/adapter';

it('renders without crashing', () => {
  let game = processedEvents.live[0].competitions[0]
  shallow(
    <FullLiveGame
      statusDetail={game.status.detail}
      homeTeam={game.competitors[0]}
      awayTeam={game.competitors[1]}
      situation={game.situation}
      stats={game.stats}
    />);
});
