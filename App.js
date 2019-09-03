import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { isLoggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD5NrQ8mJYp8ltfPZO3rpyFpCpfhGtbIIw",
      authDomain: "vue-firebase-auth-c6698.firebaseapp.com",
      databaseURL: "https://vue-firebase-auth-c6698.firebaseio.com",
      projectId: "vue-firebase-auth-c6698",
      storageBucket: "vue-firebase-auth-c6698.appspot.com",
      messagingSenderId: "1059498461982",
      appId: "1:1059498461982:web:9d283d3fd0351a38"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;