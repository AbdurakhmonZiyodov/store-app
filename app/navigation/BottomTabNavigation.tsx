/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RN from 'RN';
import GiftIcon from 'assets/icons/GiftIcon';
import HomeIcon from 'assets/icons/HomeIcon';
import LabelIcon from 'assets/icons/LabelIcon';
import UserIcon from 'assets/icons/UserIcon';
import colors from 'constants/colors';
import {map} from 'lodash';
import React, {useCallback} from 'react';
import DrawScreen from 'screens/DrawScreen';
import {APP_TAB_ROUTES} from './routes';

export type RootStackParamList = {
  [APP_TAB_ROUTES.home]: undefined;
  [APP_TAB_ROUTES.gitfs]: undefined;
  [APP_TAB_ROUTES.label]: undefined;
  [APP_TAB_ROUTES.user]: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const options = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: false,
};

function activeColor(val: boolean) {
  return val ? colors.pure : colors.black2;
}

const list = [
  {
    name: APP_TAB_ROUTES.home,
    Icon: HomeIcon,
    component: HomeScreen,
  },
  {
    name: APP_TAB_ROUTES.gitfs,
    Icon: GiftIcon,
    component: GiftsScreen,
  },
  {
    name: APP_TAB_ROUTES.label,
    Icon: LabelIcon,
    component: LabelScreen,
  },
  {
    name: APP_TAB_ROUTES.user,
    Icon: UserIcon,
    component: UserScreen,
  },
];

export default function MyTabs() {
  const renderTab = useCallback(
    ({name, Icon, component}: (typeof list)[0]) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon width={27} color={activeColor(focused)} />
          ),
        }}
      />
    ),
    [],
  );

  return (
    <Tab.Navigator screenOptions={options}>
      {map(list, renderTab)}
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return <DrawScreen />;
}

function GiftsScreen() {
  return (
    <RN.View>
      <RN.Text>GiftsScreen</RN.Text>
    </RN.View>
  );
}

function LabelScreen() {
  return (
    <RN.View>
      <RN.Text>LabelScreen</RN.Text>
    </RN.View>
  );
}

function UserScreen() {
  return (
    <RN.View>
      <RN.Text>UserScreen</RN.Text>
    </RN.View>
  );
}
