import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageSetToken = async (data: string) => {
  try {
    await AsyncStorage.setItem('token', data);
  } catch (error) {
    console.error(error);
  }
};
