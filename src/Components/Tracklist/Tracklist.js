import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div classname="TrackList">
      {
        this.props.tracks.map(track => {
          return <Track track={track}
                        key={track.id}
                        onAdd={this.props.Track}
                        onRemove={this.props.onRemove} />

        })
      }
      </div>
    );
  }
}

export default TrackList;
