import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import db from '../config';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://www.tu-web.com.mx/mp3/11.mp3' },
      { shouldPlay: true }
    );
  };

  isButtonPressed(buttonColor) {
    var time = new Date().getTime();

    var teams = db.ref('teams/' + buttonColor + '/').update({
      isButtonPressed: true,
      timeStamp: time,
    });
  }

  render() {
    return (

      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
        onPress={() => {
          var buttonColor = this.props.color;
          this.isButtonPressed(buttonColor);
          this.playSound();
        }}>
        <Text style={styles.buttonText}> Press Me </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default SoundButton;
