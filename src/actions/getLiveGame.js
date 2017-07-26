function getLiveGame(id){
  return {
    type: 'GET LIVE GAME',
    payload: parseInt(id,10)
  }
}

export default getLiveGame
