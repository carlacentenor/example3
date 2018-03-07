import React, { Component } from 'react';
import Artista from './Artista';
import './MusicApp.css';
import data from './data';


class MusicApp extends Component {
  render() {

    return (
      <div className="App container-fluid">
      <Artista  data={data} />
      </div>
    );
  }
}

export default MusicApp;
