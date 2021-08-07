import React from 'react';

import PlaylistItems from './PlaylistItems';
import PlaylistHeader from '../PlaylistHeader';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist';

function Playlist({ videos, active, nightModeCallback, nightMode }) {
  return (
    <StyledPlaylist>
      <NightMode nightMode={nightMode} nightModeCallback={nightModeCallback} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems videos={videos} active={active} />
    </StyledPlaylist>
  );
}

export default Playlist;
