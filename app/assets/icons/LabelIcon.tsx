import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconProps} from './Icon.types';
import colors from 'constants/colors';

export default function LabelIcon({width, color = colors.black2}: IconProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7071 4.29289C23.4142 4 22.9428 4 22 4L10 4C9.05719 4 8.58579 4 8.2929 4.29289C8 4.58579 8 5.05719 8 6L8 20.5259C8 21.5739 8 22.0978 8.23665 22.54C8.4733 22.9822 8.90927 23.2728 9.7812 23.8541L13.7812 26.5208C14.8567 27.2378 15.3944 27.5963 16 27.5963C16.6056 27.5963 17.1433 27.2378 18.2188 26.5208L22.2188 23.8541C23.0907 23.2728 23.5267 22.9822 23.7633 22.54C24 22.0978 24 21.5739 24 20.5259L24 6C24 5.05719 24 4.58579 23.7071 4.29289ZM13.3333 20C13.3333 21.4728 14.5272 22.6667 16 22.6667C17.4728 22.6667 18.6667 21.4728 18.6667 20C18.6667 18.5272 17.4728 17.3333 16 17.3333C14.5272 17.3333 13.3333 18.5272 13.3333 20Z"
        fill={color}
      />
    </Svg>
  );
}
