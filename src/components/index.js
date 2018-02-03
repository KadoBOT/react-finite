import React, { Component } from 'react';
import { State } from '../dist'
import Form from './Form'
import ErrorC from './Error'
import Gallery from './Gallery'
import Photo from './Photo'

class App extends Component {
  render() {
    return (
      <div className="ui-app" data-state={this.props.route}>
        <State on="start" render={props => <Form {...props} />} />
        <section className="ui-items">
          <State on="error" render={props => <ErrorC {...props} />} />
          <State on="gallery" render={props => <Gallery {...props} />} />
        </section>
        <State on="photo" render={props => <Photo {...props} />} />
      </div>
    );
  }
}

export default App;
