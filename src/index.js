import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components';
import { Machine } from './dist'
import registerServiceWorker from './registerServiceWorker';

const machineState = {
  initialState: {
    disableForm: false,
    query: '',
    searchText: 'Search',
    items: []
  },
  flow : {
    initial: 'start',
    states: {
      start: {
        onEntry: 'callLog',
        on: { SEARCH: 'loading' }
      },
      loading: {
        onEntry: ['search'],
        on: {
          SEARCH_SUCCESS: {
            gallery: {
              actions: ['updateItems']
            }
          },
          SEARCH_FAILURE: 'error',
          CANCEL_SEARCH: 'gallery'
        },
      },
      error: {
        on: { SEARCH: 'loading' }
      },
      gallery: {
        on: {
          SEARCH: 'loading',
          SELECT_PHOTO: 'photo'
        }
      },
      photo: {
        onEntry: ['setPhoto'],
        on: { EXIT_PHOTO: 'gallery' }
      }
    }
  }
}

ReactDOM.render(
  <Machine state={machineState}>
    <App />
  </Machine>
, document.getElementById('root'));
registerServiceWorker();
