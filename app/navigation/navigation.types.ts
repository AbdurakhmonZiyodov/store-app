import {RouteProp} from '@react-navigation/native';
import {APP_ROUTES, APP_TAB_ROUTES} from './routes';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootTabBarParamList = {
  [APP_TAB_ROUTES.home]: undefined;
  [APP_TAB_ROUTES.gitfs]: undefined;
  [APP_TAB_ROUTES.label]: undefined;
  [APP_TAB_ROUTES.user]: undefined;
};

export type RootAppStackParamList = {
  [APP_ROUTES.login]: undefined;
  [APP_ROUTES.bottom_tab_bar]: undefined;
};

export type AppRouteType<T extends keyof RootAppStackParamList> = RouteProp<
  RootAppStackParamList,
  T
>;

export type NavigationType = StackNavigationProp<RootAppStackParamList>;
