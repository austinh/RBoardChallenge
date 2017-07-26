import filterEvents from './filterEvents'
import getLiveGame from './getLiveGame'

describe('actions', function() {
  describe('filterEvents', function () {
    it('should return the type it was given as an argument', function() {
      expect(filterEvents('CURRENT').type).toEqual('CURRENT');
      expect(filterEvents('SCHEDULED').type).toEqual('SCHEDULED');
    });
  });

  describe('getLiveGame', function () {
    it('should have a type of "GET LIVE GAME"', function() {
      expect(getLiveGame('10').type).toEqual('GET LIVE GAME');
    });
    it('should have a the ID that was passed to it as an integer', function() {
      expect(getLiveGame('10').payload).toEqual(10);
    });
  });

});
