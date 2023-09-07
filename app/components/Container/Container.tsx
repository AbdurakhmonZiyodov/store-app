import RN from 'RN';
import React, {useMemo} from 'react';
import {ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends ViewProps {
  isTop?: boolean;
  isBottom?: boolean;
  backgroundColor?: string;
}

export default function Container(props: Props) {
  const {top, bottom} = useSafeAreaInsets();

  const style = useMemo(() => {
    return {
      ...(props.isBottom && {paddingBottom: bottom}),
      ...(props.isTop && {paddingTop: top}),
      ...(!!props.backgroundColor && {backgroundColor: props.backgroundColor}),
      flex: 1,
      paddingHorizontal: 16,
    };
  }, [bottom, props, top]);

  return (
    <RN.View style={style} {...props}>
      <RN.StatusBar backgroundColor={props.backgroundColor} />
      {props.children}
    </RN.View>
  );
}
