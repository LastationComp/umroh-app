import { Controls, MediaPlayEvent, MediaPlayFailEvent, MediaPlayRequestEvent, MediaPlayer, MediaPlayerInstance, MediaProvider, PlayButton } from '@vidstack/react';
import React, { useEffect, useRef } from 'react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';
import { PauseIcon, PlayIcon } from '@vidstack/react/icons';
import '@vidstack/react/player/styles/plyr/theme.css';
export default function StoryContent() {
  return (
    <div className=" flex justify-center">
      <div className="w-[500px]">
        {/* <MediaPlayer title="Sprite Fight" src="https://www.youtube.com/watch?v=dK5OyKhCpDk&list=RDyrF66zzdSgc&index=2">
          <MediaProvider />
        </MediaPlayer> */}
      </div>
    </div>
  );
}
