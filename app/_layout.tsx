import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';

import { Alert, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1 }}>
        <RectButton
          testID="demo-button"
          style={styles.demoButton}
          onPress={() => Alert.alert('Demo Button', 'You pressed the demo button!')}
        >
          <Text style={styles.buttonText}>Press Me!</Text>
        </RectButton>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  demoButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
