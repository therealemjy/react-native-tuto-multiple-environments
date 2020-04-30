/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Linking,
} from 'react-native';
import Config from 'react-native-config';

const App: () => React$Node = () => {
  const environment = Config.ENVIRONMENT;

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>
            Environment: <Text style={styles.environment}>{environment}</Text>
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>
            Brought to you by{' '}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://peel.dating')}>
              Peel ❤️
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
  environment: {
    fontWeight: '600',
    color: 'rgb(37, 104, 239)',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontWeight: '600',
    color: 'rgb(37, 104, 239)',
  },
});

export default App;
