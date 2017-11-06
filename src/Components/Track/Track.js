import React from 'react';
import './Track.css';

let renderAction {


class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
}

addTrack(event) {
  this.props.onAdd(this.props.tracks);
}

removeTrack(event) {
  this.props.onRemove(this.props.track);
}

  render() {
    return (
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action">/* + or - will go here */</a>
</div>
    )
//Add extra methods here.
renderAction() {
  if (this.props.isRemoval) {
    return <a className="Track-action" onClick={this.removeTrack}>-</a>
  }
  return <a className="Track-action" onClick={this.addTrack}>+</a>;
}
//Add extra methods here.
  }
}

export default Track;
