import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';
import {IconProps} from './Icon.types';
import colors from 'constants/colors';

export default function QuestionIcon({color = colors.white, width}: IconProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
      <Circle cx="12" cy="18" r="0.5" fill={color} stroke="white" />
      <Path
        d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10"
        stroke={color}
        strokeWidth="2"
      />
    </Svg>
  );
}
