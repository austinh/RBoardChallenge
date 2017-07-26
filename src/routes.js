import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import { store } from './index'
import FullLiveGame from './containers/FullLiveGameContainer'
import { sortScheduled } from "./reducers/eventFilterReducer";
import { EVENT_SORT_BY } from "./containers/SortedScheduledGameContainer";

const onEnterApp = ({ location },) => {
  const { order } = location.query;
  store.dispatch(sortScheduled(order || EVENT_SORT_BY.TIME_ASC));
}

export default (
  <div>
    <Route path="/" component={App} onEnter={onEnterApp} />
    <Route path="live/:id" component={FullLiveGame} />
  </div>
)
