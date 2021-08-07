import React from 'react';

import StyledNightMode from './styles/StyledNightMode';

function NightMode({ nightMode, nightModeCallback }) {
  return (
    <StyledNightMode>
      <span>Nightmode: </span>

      <label htmlFor="nightmode-switch" className="switch">
        <input
          type="checkbox"
          id="nightmode-switch"
          checked={nightMode}
          onChange={nightModeCallback}
        />
        <span className="slider round" />
      </label>
    </StyledNightMode>
  );
}

export default NightMode;
