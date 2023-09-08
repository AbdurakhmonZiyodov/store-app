import {useNavigation} from '@react-navigation/native';
import RN from 'RN';
import DarkLogoIcon from 'assets/icons/DarkLogoIcon';
import LeftArrowIcon from 'assets/icons/LeftArrowIcon';
import VKIcon from 'assets/icons/VKIcon';
import YaIcon from 'assets/icons/YaIcon';
import Container from 'components/Container';
import Dismessible from 'components/Dismessible';
import {TextField} from 'components/form';
import colors from 'constants/colors';
import {HIT_SLOP} from 'constants/utils';
import useToken from 'hooks/useToken';
import {hasIn} from 'lodash';
import {NavigationType} from 'navigation/navigation.types';
import {APP_ROUTES} from 'navigation/routes';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {ActivityIndicator} from 'react-native';
import {styles} from './LoginScreen.styles';
import {useLogin} from './hooks/useLogin';
import {observer} from 'mobx-react';

export type LoginFormData = {
  login: string;
  password: string;
};

const defaultValues = {
  login: '',
  password: '',
};

const LoginScreen: React.FC = () => {
  const tokenStore = useToken();
  const {handleSubmit, control} = useForm<LoginFormData>({
    defaultValues,
  });

  const navigation = useNavigation<NavigationType>();
  const {logIn, loading, data} = useLogin();

  useEffect(() => {
    if (hasIn(data, 'login.accessToken') && hasIn(data, 'login.refreshToken')) {
      tokenStore._set({
        accessToken: data?.login?.accessToken,
        refreshToken: data?.login?.refreshToken,
      });
      navigation.navigate(APP_ROUTES.bottom_tab_bar);
    }
  }, [data, navigation, tokenStore]);

  const onSubmit = handleSubmit(async _data => {
    await logIn({variables: _data});
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
              {loading ? (
                <ActivityIndicator
                  color={colors.white}
                  style={styles.activeIndicator}
                />
              ) : (
                <RN.Text style={styles.logInText}>Войти</RN.Text>
              )}
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

export default observer(LoginScreen);
