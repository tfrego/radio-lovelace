import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.Morning.length + props.tracks.Evening.length} tracks`);
  const playlists = {
    morningTracks: props.tracks.Morning,
    eveningTracks: props.tracks.Evening
  };
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
          clickFavoriteCallback = {props.clickFavoriteCallback}
          topTrackCallback = {props.topTrackCallback}
          switchPlaylistCallback = {props.switchPlaylistCallback}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          clickFavoriteCallback = {props.clickFavoriteCallback}
          topTrackCallback = {props.topTrackCallback}
          switchPlaylistCallback = {props.switchPlaylistCallback}
        />
      </section>
    </div>
  );
};

export default RadioSet;
