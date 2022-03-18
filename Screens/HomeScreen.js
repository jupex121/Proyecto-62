import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  goToFallingScreen = (fallingcolor) => {
    this.props.navigation.navigate('FallingScreen', { color: fallingcolor });
  };

  constructor() {
    super();
    this.state = {
      likeCounter: 0,
      dislikeCounter: 0,
    };
  }

  componentDidMount() {}

  likeCounter = () => {
    this.setState({ likeCounter: this.state.likeCounter + 1 });
  };

  dislikeCounter = () => {
    this.setState({ dislikeCounter: this.state.dislikeCounter + 1 });
  };

  isLikePressed() {
    var like = db.ref('rates/' + '/');
    like.update({
      likes: 1,
    });
  }

  isDislikePressed() {
    var dislike = db.ref('rates/' + '/');
    dislike.update({
      dislikes: 1,
    });
  }

  changeColor = () => {
    this.setState({
      backgroundColor: 'white',
      backgroundColor2: 'blue',
    })
  }

  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightgreen' }]}
          onPress={() => this.goToFallingScreen('lightgreen')}>
          <Text style={styles.buttonText}> Notion - The Rare Occasions </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'pink' }]}
          onPress={() => this.goToFallingScreen('pink')}>
          <Text style={styles.buttonText}>
            {' '}
            this is what falling in love feels like - JVKE{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => this.goToFallingScreen('blue')}>
          <Text style={styles.buttonText}> Dandelions - Ruth B. </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => this.goToFallingScreen('orange')}>
          <Text style={styles.buttonText}>
            {' '}
            KEEP IT UP - Rex Orange County{' '}
          </Text>
        </TouchableOpacity>

        <View style={styles.ratingContainer}>
          <Text style={{ textAlign: 'center', margin: 25 }}> Rate Us </Text>
          <Text style={{ marginLeft: 25, marginBottom: -16 }}>
            {' '}
            {this.state.likeCounter}{' '}
          </Text>
          <Text style={{ marginLeft: 100, marginBottom: 15 }}>
            {' '}
            {this.state.dislikeCounter}{' '}
          </Text>
          <TouchableOpacity onPress={this.isLikePressed, this.likeCounter}>
            <Image
              style={{ width: 50, height: 50, marginLeft: 5 }}
              source={require('../thumbsup.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.isDislikePressed, this.dislikeCounter}>
            <Image
              style={{ width: 50, height: 50, marginTop: -35, marginLeft: 100 }}
              source={require('../thumbsdown.png')}
            />
          </TouchableOpacity>
        
        </View>
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
    marginTop: 50,
    width: 300,
    height: 50,
  },

  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },

  ratingContainer: {
    alignSelf: 'center',
    flex: 1,
  },
});
