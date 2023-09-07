import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconProps} from './Icon.types';
import colors from 'constants/colors';

export default function YaIcon({width, color = colors.white}: IconProps) {
  const height = 1.53 * width;
  return (
    <Svg width={width} height={height} viewBox="0 0 13 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58514 20H13V0H8.0512C3.07241 0 0.459616 2.61473 0.459616 6.47645C0.457351 9.52135 1.91205 11.3907 4.44899 13.2356L0 20H3.68938L8.64044 12.4217L6.91631 11.2473C4.83729 9.80988 3.819 8.69293 3.819 6.27036C3.819 4.14037 5.28162 2.70355 8.06366 2.70355H9.58514V20Z"
        fill={color}
      />
    </Svg>
  );
}
