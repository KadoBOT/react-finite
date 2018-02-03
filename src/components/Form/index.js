import React from 'react';
import { State } from '../../dist'
import Loading from '../Loading'

class Form extends React.Component {
  state = {
    query: ''
  }
  
  handleChangeQuery = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.transition('SEARCH', { data: {
      disableForm: true,
      searchText: 'Searching...',
      ...this.state
    }})
    this.props.updateState()
  }

  render() {
    return (
      <form className="ui-form" onSubmit={this.handleSubmit}>
        <input
          className="ui-input"
          disabled={this.props.disableForm}
          placeholder="Search Flickr for photos..."
          type="search"
          value={this.state.query}
          onChange={this.handleChangeQuery}
        />
        <div className="ui-buttons">
          <button className="ui-button" disabled={this.props.disableForm}>
            {this.props.searchText}
          </button>
          <State on="loading" render={props => <Loading {...props} />} />
        </div>
      </form>
    )
  }
}

export default Form