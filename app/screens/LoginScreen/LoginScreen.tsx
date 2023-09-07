import RN from 'RN';
import DarkLogoIcon from 'assets/icons/DarkLogoIcon';
import Container from 'components/Container';
import {TextField} from 'components/form';
import colors from 'constants/colors';
import React from 'react';
import {useForm} from 'react-hook-form';
import {styles} from './LoginScreen.styles';
import YaIcon from 'assets/icons/YaIcon';
import VKIcon from 'assets/icons/VKIcon';
import LeftArrowIcon from 'assets/icons/LeftArrowIcon';
import {HIT_SLOP} from 'constants/utils';
import Dismessible from 'components/Dismessible';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTES} from 'navigation/routes';
import {NavigationType} from 'navigation/AppNavigator';

type FormData = {
  login: string;
  password: string;
};

const LoginScreen: React.FC = () => {
  const {handleSubmit, control} = useForm<FormData>();
  const navigation = useNavigation<NavigationType>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    navigation.navigate(APP_ROUTES.draw);
  });

  return (
    <Container isTop isBottom backgroundColor={colors.white}>
      <Dismessible>
        <RN.View style={styles.container}>
          <RN.View>
            <RN.TouchableOpacity hitSlop={HIT_SLOP} style={styles.backButton}>
              <LeftArrowIcon width={28} />
            </RN.TouchableOpacity>
            <RN.Text style={styles.title}>Авторизация</RN.Text>
            <RN.View style={styles.logoContainer}>
              <DarkLogoIcon width={114} />
            </RN.View>
            <RN.Text style={styles.subTitle}>Войти</RN.Text>

            <RN.View style={styles.inputContainer}>
              <TextField
                name="login"
                // @ts-ignore
                control={control}
                rules={{required: true}}
                placeholder="Логин или телефон"
              />

              <TextField
                name="password"
                // @ts-ignore
                control={control}
                isPassword
                rules={{required: true}}
                placeholder="Пароль"
              />
            </RN.View>

            <RN.TouchableOpacity
              style={styles.logInButton}
              activeOpacity={0.5}
              onPress={onSubmit}>
              <RN.Text style={styles.logInText}>Войти</RN.Text>
            </RN.TouchableOpacity>

            <RN.TouchableOpacity>
              <RN.Text style={styles.forgateText}>Не помню пароль</RN.Text>
            </RN.TouchableOpacity>
          </RN.View>

          <RN.View>
            <RN.View style={styles.socialContainer}>
              <RN.TouchableOpacity
                activeOpacity={0.5}
                style={[styles.socialButton, styles.VKButton]}>
                <VKIcon width={26} />
                <RN.Text style={styles.socialText}>
                  Войти через Вконтакте
                </RN.Text>
              </RN.TouchableOpacity>

              <RN.TouchableOpacity
                activeOpacity={0.5}
                style={[styles.socialButton, styles.YaButton]}>
                <YaIcon width={16} />
                <RN.Text style={styles.socialText}>Войти через Яндекс</RN.Text>
              </RN.TouchableOpacity>
            </RN.View>

            <RN.Text style={styles.registrationText}>Регистрация</RN.Text>
          </RN.View>
        </RN.View>
      </Dismessible>
    </Container>
  );
};

export default LoginScreen;
