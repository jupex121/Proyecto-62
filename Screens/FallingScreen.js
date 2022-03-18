import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import SoundButton from '../components/SoundButton';

export default class HomeScreen extends React.Component {
  goToHomeScreen = (homecolor) => {
    this.props.navigation.navigate('HomeScreen', { color: homecolor });
  };

  render() {
    return (
      <View>
        <AppHeader />
        <SoundButton color={this.props.navigation.getParam('color')} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '' }]}
          onPress={() => this.goToHomeScreen('')}>
          <Text style={styles.buttonText}> Go Back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2.5,
    borderRadius: 50,
    marginTop: 100,
    width: 200,
    height: 50,
  },

  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
