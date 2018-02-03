import React from 'react';

class Photo extends React.Component {
  state = {
    photo: null,
    title: null
  }

  setPhoto() {
    this.props.updateState()
  }

  handleClick = () => {
    this.props.transition('EXIT_PHOTO', { off: 'photo' })
  }

  render() {
    return this.props.photo ?
      <section
        className="ui-photo-detail"
        onClick={this.handleClick}
      >
        <img alt={this.props.photo.title} className="ui-photo" src={this.props.photo.media.m} />
      </section> :
      null
  }
}

export default Photo
