import React, {useEffect, useRef, useState} from 'react';
import RN from 'RN';
import LottieView from 'lottie-react-native';

import loading from '../../assets/animations/app_loading.json';
import {SIZES} from 'constants/sizes';
import colors from 'constants/colors';

const AppLoading = () => {
  const animationRef = useRef<LottieView>(null);
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    animationRef.current?.play();

    const timeout = setTimeout(() => {
      setIsAnimate(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isAnimate) {
    return <RN.View />;
  }

  return (
    <RN.View style={[styles.root, RN.StyleSheet.absoluteFill]}>
      <LottieView
        source={loading}
        ref={animationRef}
        style={{width: SIZES.width, height: SIZES.width}}
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flex: 1,
    zIndex: 1,
  },
});

export default AppLoading;
