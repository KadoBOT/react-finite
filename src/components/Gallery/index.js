import React from 'react';

class Galery extends React.Component {
  selectPhoto = (item) => {
    this.props.transition('SELECT_PHOTO', { data: { photo: item }})
  }
  
  render() {
    return (
      this.props.items.map((item, i) => (
        <img
          alt={item.title}
          className="ui-item"
          key={item.link}
          src={item.media.m}
          style={{ '--i': i }}
          onClick={() => this.selectPhoto(item)}
        />
      ))
    )
  }
}

export default Galery
