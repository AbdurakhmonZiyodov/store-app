import RN from 'RN';
import ArrowLeftTallIcon from 'assets/icons/ArrowLeftTallIcon';
import LightLogoIcon from 'assets/icons/LightLogoIcon';
import QuestionIcon from 'assets/icons/QuestionIcon';
import Container from 'components/Container';
import colors from 'constants/colors';
import {SIZES} from 'constants/sizes';
import {HIT_SLOP} from 'constants/utils';
import React, {useCallback, useEffect, useMemo} from 'react';
import {styles} from './DrawScreen.styles';

import useCountDown from 'hooks/useCountDown';
import useToken from 'hooks/useToken';
import {map, toString} from 'lodash';

const list = [
  {
    id: 0,
    name: 'Macboock',
    count: 1,
    imgSource: require('./../../assets/images/macbook.png'),
  },
  {
    id: 1,
    name: 'Iphone',
    count: 3,
    imgSource: require('./../../assets/images/iphone.png'),
  },
  {
    id: 2,
    name: 'AirPods',
    count: 10,
    imgSource: require('./../../assets/images/airPods.png'),
  },
];

const DrawScreen: React.FC = () => {
  const {secondsLeft, start} = useCountDown();
  const tokenStore = useToken();

  const goBack = useCallback(() => {
    RN.Alert.alert('Caution', 'Do you want to go out?', [
      {text: 'yes', onPress: tokenStore._clear},
      {text: 'no'},
    ]);
  }, [tokenStore._clear]);

  const secondStr = useMemo(() => {
    let count: string | number = secondsLeft;

    if (count < 10) {
      count = `0${count}`;
    }

    return [...toString(count)];
  }, [secondsLeft]);

  useEffect(() => {
    start(45);
  }, [start]);

  return (
    <Container isTop isBottom backgroundColor={colors.dark}>
      <RN.View style={[RN.StyleSheet.absoluteFill, styles.pureView]} />
      <RN.View style={styles.container}>
        <RN.View>
          <RN.View>
            <RN.TouchableOpacity
              hitSlop={HIT_SLOP}
              style={styles.backButton}
              onPress={goBack}>
              <ArrowLeftTallIcon width={28} />
            </RN.TouchableOpacity>
            <RN.Text style={styles.title}>Розыгрыш</RN.Text>
          </RN.View>

          <RN.View style={styles.logoContainer}>
            <LightLogoIcon width={SIZES.width * 0.5} />
          </RN.View>

          <RN.View>
            <RN.Text style={styles.infoText}>До начала розыгрыша</RN.Text>
            <RN.View style={styles.infoIcon}>
              <QuestionIcon width={24} />
            </RN.View>
          </RN.View>

          {/* Timer section */}
          <RN.View style={styles.timerContaiener}>
            <RN.View style={styles.flexSection}>
              <RN.View
                style={[styles.timerTextContainer, styles.lightContainer]}>
                <RN.Text style={[styles.timerText]}>0</RN.Text>
              </RN.View>
              <RN.View
                style={[styles.timerTextContainer, styles.lightContainer]}>
                <RN.Text style={[styles.timerText]}>0</RN.Text>
              </RN.View>
            </RN.View>
            <RN.View style={styles.dotsContainer}>
              <RN.Text style={[styles.timerText]}>:</RN.Text>
            </RN.View>
            <RN.View style={styles.flexSection}>
              <RN.View
                style={[styles.timerTextContainer, styles.pinkContainer]}>
                <RN.Text style={[styles.timerText, styles.lightText]}>
                  {secondStr[0] || 0}
                </RN.Text>
              </RN.View>
              <RN.View
                style={[styles.timerTextContainer, styles.pinkContainer]}>
                <RN.Text style={[styles.timerText, styles.lightText]}>
                  {secondStr[1] || 0}
                </RN.Text>
              </RN.View>
            </RN.View>
          </RN.View>

          <RN.View>
            <RN.Text style={styles.infoText}>Разыгрываем сегодня</RN.Text>
            <RN.View style={styles.infoIcon}>
              <QuestionIcon width={24} />
            </RN.View>
          </RN.View>

          <RN.View style={styles.listContainer}>
            {map(list, item => (
              <RN.TouchableOpacity activeOpacity={0.5} key={item.id}>
                <RN.View style={styles.itemCircle}>
                  <RN.Text style={styles.itemCircleText}>{item.count}</RN.Text>
                </RN.View>
                <RN.View style={styles.itemContainer}>
                  <RN.Image source={item.imgSource} style={styles.itemImage} />
                </RN.View>
                <RN.Text style={styles.itemText}>{item.name}</RN.Text>
              </RN.TouchableOpacity>
            ))}
          </RN.View>
        </RN.View>

        <RN.TouchableOpacity
          style={styles.participateButton}
          activeOpacity={0.5}>
          <RN.Text style={styles.participateText}>Участвовать</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </Container>
  );
};

export default DrawScreen;
