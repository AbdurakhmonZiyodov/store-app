import {useLazyQuery} from '@apollo/client';
import {LoginQuery} from 'apollo/queries';

export const useLogin = () => {
  const [logIn, {data, loading, error}] = useLazyQuery(LoginQuery);

  return {
    data,
    loading,
    error,
    logIn,
  };
};
