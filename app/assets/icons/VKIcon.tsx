import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconProps} from './Icon.types';
import colors from 'constants/colors';

export default function VKIcon({width, color = colors.white}: IconProps) {
  const height = width * 0.67;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 16" fill="none">
      <Path
        d="M13.0718 15.5C4.87188 15.5 0.194878 9.86937 0 0.5H4.10743C4.24235 7.37688 7.27038 10.2898 9.66888 10.8904V0.5H13.5366V6.43093C15.9051 6.17568 18.3933 3.47297 19.2328 0.5H23.1004C22.4558 4.16366 19.7575 6.86637 17.8387 7.97748C19.7575 8.87838 22.8307 11.2357 24 15.5H19.7425C18.8281 12.6471 16.5497 10.4399 13.5366 10.1396V15.5H13.0718Z"
        fill={color}
      />
    </Svg>
  );
}
