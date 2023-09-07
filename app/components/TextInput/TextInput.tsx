import RN from 'RN';
import React, {FC, memo} from 'react';
import {FieldError} from 'react-hook-form';
import type {TextInputProps} from 'react-native';

import EyeOffIcon from 'assets/icons/EyeOffIcon';
import EyeOnIcon from 'assets/icons/EyeOnIcon';
import colors from 'constants/colors';
import useVisibility from 'hooks/useVisibility';
import {styles} from './TextInput.styles';

export type InputProps = TextInputProps & {
  inputRef?: any;
  onChange?(val: string): void;
  error?: FieldError;
  placeholderTextColor?: string;
  isPassword?: boolean;
};

const TextInput: FC<InputProps> = ({
  inputRef,
  onChange,
  error,
  isPassword = false,
  style,
  ...props
}) => {
  const eyeVisiblity = useVisibility(isPassword);
  const Icon = eyeVisiblity.visible ? EyeOnIcon : EyeOffIcon;

  return (
    <RN.View style={[styles.inputContainer, !!error && styles.error, style]}>
      <RN.TextInput
        ref={inputRef}
        onChangeText={onChange}
        secureTextEntry={eyeVisiblity.visible}
        placeholderTextColor={props.placeholderTextColor || colors.dark2}
        {...props}
        style={styles.input}
      />

      {isPassword && (
        <RN.TouchableOpacity
          activeOpacity={0.5}
          style={styles.eyeContainer}
          onPress={eyeVisiblity.toggle}>
          <Icon width={24} color={colors.white3} />
        </RN.TouchableOpacity>
      )}
    </RN.View>
  );
};

export default memo(TextInput);
