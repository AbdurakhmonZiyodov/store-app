import React from 'react';
import {G, Path, Svg} from 'react-native-svg';
import {IconProps} from './Icon.types';
import colors from 'constants/colors';

export default function LeftArrowIcon({
  width,
  color = colors.black,
}: IconProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
      <G id="arrows/chevron-left">
        <Path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L6.58578 12L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}
