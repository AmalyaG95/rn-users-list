import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigation/app-navigator';
import { AppProviders } from './components';
import { StyleSheet } from 'react-native';

const App = () => (
  <AppProviders>
    <SafeAreaView style={styles.mainContainer}>
      <AppNavigator />
    </SafeAreaView>
  </AppProviders>
);

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
