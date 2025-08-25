import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from '../app/store';

type TAppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: TAppProvidersProps) => (
  <Provider store={store}>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </Provider>
);

export default AppProviders;
