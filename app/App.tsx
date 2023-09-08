import GraphqlProvider from 'apollo/GraphqlProvider';
import AppLoading from 'components/Loading/AppLoading';
import useToken from 'hooks/useToken';
import {observer} from 'mobx-react';
import AppNavigator from 'navigation/AppNavigator';
import React, {useEffect} from 'react';

const Inner = observer(() => {
  const {didMount, getTokens} = useToken();

  console.log(getTokens());

  useEffect(() => {
    didMount();
  }, [didMount, getTokens]);

  return (
    <GraphqlProvider>
      <AppLoading />
      <AppNavigator />
    </GraphqlProvider>
  );
});

const App = () => {
  return <Inner />;
};

export default App;
