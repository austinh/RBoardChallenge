import React from 'react';
import { mount,shallow } from 'enzyme';
import FinalGame from '../FinalGame';
import processedEvents from '../../adapters/adapter';

it('renders without crashing', () => {
  let game = processedEvents.final[0].competitions[0]
  shallow(<FinalGame
          statusDetail={game.status.detail}
          homeTeam={game.competitors[0]}
          awayTeam={game.competitors[1]}
          links={processedEvents.final[0].links}
          eventID={processedEvents.final[0].id.toString()}
          />);
});
