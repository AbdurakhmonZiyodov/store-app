import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import RN from 'RN';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import {styles} from './AppNavigator.styles';
import MyTabs from './BottomTabNavigation';
import {RootAppStackParamList} from './navigation.types';
import {APP_ROUTES} from './routes';

const Stack = createStackNavigator<RootAppStackParamList>();

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
            name={APP_ROUTES.bottom_tab_bar}
            component={MyTabs}
            options={{...TransitionPresets.SlideFromRightIOS}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RN.View>
  </SafeAreaView>
);

export default AppNavigator;
