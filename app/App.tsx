import GraphqlProvider from 'apollo/GraphqlProvider';
import useToken from 'hooks/useToken';
import {observer} from 'mobx-react';
import AppNavigator from 'navigation/AppNavigator';
import React, {useEffect} from 'react';

// const client = new ApolloClient({
//   uri: 'http://45.12.74.28/graphql',
//   cache: new InMemoryCache(),
// });

const Inner = observer(() => {
  const {didMount} = useToken();

  useEffect(() => {
    didMount();
  }, [didMount]);
  return (
    <GraphqlProvider>
      <AppNavigator />
    </GraphqlProvider>
  );
});

const App = () => {
  return <Inner />;
};

export default App;
