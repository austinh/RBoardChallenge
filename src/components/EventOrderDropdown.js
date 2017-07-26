import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { EVENT_SORT_BY } from "../containers/SortedScheduledGameContainer";
import { sortScheduled } from "../reducers/eventFilterReducer";

class EventOrderDropdown extends React.Component {

  handleChange(e) {
    const { value } = e.target;
    const { location, sortScheduled } = this.props;
    const newUrl = browserHistory.createPath({
      pathname: location.pathname,
      query: {
        order: value,
      }
    });
    browserHistory.push(newUrl);

    sortScheduled(value);
  }

  render() {
    const { location: { query: { order } } } = this.props;
    return (<select onChange={(e) => this.handleChange(e)} value={order}>
      {Object.values(EVENT_SORT_BY).map(v =>
        (<option key={v}>{v}</option>)
      )}
    </select>);
  }
}

export default connect(null, { sortScheduled })(EventOrderDropdown);