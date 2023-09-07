import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import RN from 'RN';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './AppNavigator.styles';
import {APP_ROUTES} from './routes';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import DrawScreen from 'screens/DrawScreen';

export type RootStackParamList = {
  [APP_ROUTES.login]: undefined;
  [APP_ROUTES.draw]: undefined;
};

export type AppRouteType<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type NavigationType = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: FC = () => (
  <SafeAreaView style={styles.navigator}>
    <RN.View style={styles.navigator}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
          initialRouteName={APP_ROUTES.login}>
          <Stack.Screen name={APP_ROUTES.login} component={LoginScreen} />
          <Stack.Screen
            name={APP_ROUTES.draw}
            component={DrawScreen}
            options={{...TransitionPresets.SlideFromRightIOS}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RN.View>
  </SafeAreaView>
);

export default AppNavigator;
