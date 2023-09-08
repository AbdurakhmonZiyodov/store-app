import Store from '@react-native-async-storage/async-storage';

export default class AsyncStorageHelper {
  public static _set = async ({
    key,
    data,
  }: {
    key: string;
    data: string | object;
  }) => {
    try {
      await Store.setItem(
        key,
        typeof data === 'string' ? data : JSON.stringify(data),
      );
      return true;
    } catch (e) {
      return false;
    }
  };

  public static _get = async ({key}: {key: string}) => {
    try {
      const jsonValue = await Store.getItem(key);

      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return false;
    }
  };

  public static _remove = async ({key}: {key: string}) => {
    try {
      await Store.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  };
}
