import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

  this.search = this.search.bind(this);
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  }

    search(term) {
      Spotify.search(term).then(searchResults => {
        this.setState({searchResults: searchResults});
      });
    }

    addTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks.push(track);
    }

    removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    }

    updatePlaylistName(name) {
      this.setState({playlistName: name});
    }

    savePlaylist() {
  const trackUris = this.state.playlistTracks.map(track => track.uri);
  Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []
      });
    });
  }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <div className="App-playlist">
    <SearchResults searchResults={this.state.searchResults}
                          onAdd={this.addTrack} />
    <Playlist playlistTracks={this.state.playlistTracks}
                          onNameChange={this.updatePlaylistName}
                          onRemove={this.removeTrack}
                          onSave={this.savePlaylist} />
    </div>
  </div>
</div>
      );
  }
}

export default App;
