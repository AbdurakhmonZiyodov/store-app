import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconProps} from './Icon.types';
import colors from 'constants/colors';

export default function ArrowLeftTallIcon({
  width,
  color = colors.white,
}: IconProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 12H21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.28481 11.7966L7.73501 7.90356C8.2645 7.52535 9 7.90385 9 8.55455V15.4454C9 16.0961 8.2645 16.4746 7.73501 16.0964L2.28481 12.2034C2.14522 12.1037 2.14522 11.8963 2.28481 11.7966Z"
        fill={color}
      />
    </Svg>
  );
}
