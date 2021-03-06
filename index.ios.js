/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, TouchableHighlight } from 'react';

import {
  AppRegistry,
  TextInput,
  ListView,
  Image,
  StyleSheet,
  Text,
  AlertIOS,
  Alert,
  View
} from 'react-native';

export default class yay extends Component {

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListViewBasics></ListViewBasics>
      </View>
    );
  }
}


class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('Bananas', () => Bananas);

class ListViewBasics extends Component {

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var movies = [];
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.movies = responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
    this.state = {
      dataSource: ds.cloneWithRows([
        { "title": "Star Wars", "releaseYear": "1977"},
        { "title": "Back to the Future", "releaseYear": "1985"},
        { "title": "The Matrix", "releaseYear": "1999"},
        { "title": "Inception", "releaseYear": "2010"},
        { "title": "Interstellar", "releaseYear": "2014"}
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title} - {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <TextInput
        style={{flex: 2, backgroundColor: 'skyblue', color: 'blue'}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={{flex: 3, backgroundColor: 'steelblue'}}>
        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

AppRegistry.registerComponent('BlinkApp', () => BlinkApp);

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);

const styles = StyleSheet.create({
  quarter: {
    flex: 1,
    width: 400,
    height: 400,
  },
  half: {
    flex: 2,
    width: 400,
    height: 800,
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    width: 400,
    height: 400,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigblue: {
    color: 'blue',
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    width: 400,
  },
  red: {
    color: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('yay', () => yay);
