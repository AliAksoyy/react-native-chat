import Toast from 'react-native-toast-message';

export  enum Type {
  success = 'success',
  error = 'error',
  tomatoToast = 'tomatoToast',
}

export const toastifyMessage = (type: Type, text: string) => {
  return Toast.show({
    type: type,
    text1: text,
  });
};
