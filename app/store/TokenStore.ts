import AsyncStorageHelper from 'helper/AsyncStorageHelper';
import {hasIn} from 'lodash';
import {makeAutoObservable, runInAction} from 'mobx';
import {createContext} from 'react';

interface Props {
  accessToken: string;
  refreshToken: string;
}

export const TOKEN_KEY = '@tokens';

class TokenStore {
  private accessToken: string = '';
  private refreshToken: string = '';

  constructor() {
    makeAutoObservable(this);

    this.didMount();
  }

  public didMount = async () => {
    const tokens = await AsyncStorageHelper._get({key: TOKEN_KEY});

    if (hasIn(tokens, 'accessToken') && hasIn(tokens, 'refreshToken')) {
      runInAction(() => {
        this.accessToken = tokens.accessToken;
        this.refreshToken = tokens.refreshToken;
      });
    }
  };

  public _set = async (props: Props) => {
    this.accessToken = props.accessToken;
    this.refreshToken = props.refreshToken;

    await AsyncStorageHelper._set({key: TOKEN_KEY, data: props}).then(res => {
      console.log({res});
    });
  };

  public getTokens = () => {
    const {accessToken, refreshToken} = this;

    return {
      accessToken,
      refreshToken,
    };
  };

  public _clear = async () => {
    this.accessToken = '';
    this.refreshToken = '';

    await AsyncStorageHelper._remove({key: TOKEN_KEY});
  };

  public get isAuthenticated(): boolean {
    return !!this.accessToken && !!this.refreshToken;
  }
}

const tokenStore = new TokenStore();

export const TokenStoreContext = createContext(tokenStore);
