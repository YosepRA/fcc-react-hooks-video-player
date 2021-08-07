import React from 'react';

import PlaylistItem from '../PlaylistItem';
import StyledPlaylistItems from '../styles/StyledPlaylistItems';
import withLink from '../hoc/withLink';

const PlaylistItemWithLink = withLink(PlaylistItem);

function PlaylistItems({ videos, active }) {
  return (
    <StyledPlaylistItems>
      {videos.map((video) => (
        <PlaylistItemWithLink
          key={video.id}
          video={video}
          active={video.id === active.id}
          played={video.played}
        />
      ))}
    </StyledPlaylistItems>
  );
}

export default PlaylistItems;
