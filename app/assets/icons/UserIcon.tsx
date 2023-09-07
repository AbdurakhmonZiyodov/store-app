import React from 'react';
import {Ellipse, Path, Svg} from 'react-native-svg';
import {IconProps} from './Icon.types';
import colors from 'constants/colors';

export default function UserIcon({width, color = colors.black2}: IconProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 32 32" fill="none">
      <Path
        d="M26.48 25.8159C27.0696 25.693 27.4206 25.0773 27.1457 24.5414C26.3486 22.9875 25.0254 21.622 23.3051 20.5954C21.2094 19.3446 18.6416 18.6667 16 18.6667C13.3584 18.6667 10.7906 19.3446 8.69485 20.5954C6.9746 21.622 5.65133 22.9875 4.85426 24.5414C4.57938 25.0773 4.9304 25.693 5.52002 25.8159L7.83912 26.2992C13.2219 27.421 18.7781 27.421 24.1608 26.2992L26.48 25.8159Z"
        fill={color}
      />
      <Ellipse cx="16" cy="10.6667" rx="6.66667" ry="6.66667" fill={color} />
    </Svg>
  );
}
