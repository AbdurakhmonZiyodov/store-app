import React, {FC} from 'react';
import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {styles} from './Dismessible.styles';

type DismessibleProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Dismessible: FC<DismessibleProps> = ({children, style}) => (
  <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    accessible={false}
    style={[styles.container, style]}>
    {children}
  </TouchableWithoutFeedback>
);

export default Dismessible;
