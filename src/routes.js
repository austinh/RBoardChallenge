import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import FullLiveGame from './containers/FullLiveGameContainer'



export default (
  <div>
    <Route path="/" component={App} />
    <Route path="live/:id" component={FullLiveGame} />
  </div>
)
