import React from 'react';
import fetchJsonp from 'fetch-jsonp'

class Loading extends React.Component {
  state = {
    items: []
  }

  search = async () => {
    const encodedQuery = encodeURIComponent(this.props.query)

    try {
      const response = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        let response = await fetchJsonp(
          `https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=${encodedQuery}`,
          { jsonpCallback: 'jsoncallback' }
        )
        return response.json()
      }
      const { items } = await response()
      this.props.transition('SEARCH_SUCCESS', { off: 'loading', data: { items, disableForm: false, searchText: 'Search' } })
    } catch(err) {
      this.props.transition('SEARCH_FAILURE', { off: 'loading', data: { disableForm: false, searchText: 'Search' } })
      this.props.updateState()
    }
  }

  updateItems = async () => {
    await this.search
    this.props.updateState()
  }

  cancelSearch = () => {
    this.props.transition('CANCEL_SEARCH', { off: 'loading', data: { disableForm: false, searchText: 'Search' } })
    this.props.updateState()
  }

  render() {
    return (
      <button
        className="ui-button"
        type="button"
        onClick={this.cancelSearch}
      >
        Cancel
      </button>
    )
  }
}

export default Loading
