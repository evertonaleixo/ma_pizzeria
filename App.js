import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

import { PrivateRoute } from './utils/components/private-route'

import Carte from './carte/components/carte_screen'
import Home from './home/components/home_screen'
import Ranking from './ranking/components/ranking_screen'
import Voting from './voting/components/voting_screen'

import store from './store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link to="/" underlayColor='#f0f4f7' style={styles.navItem}>
                  <Text>Bem vindo</Text>
              </Link>

              <Link to="/carte" underlayColor='#f0f4f7' style={styles.navItem}>
                  <Text>Cardapio</Text>
              </Link>

              <Link to="/ranking" underlayColor='#f0f4f7' style={styles.navItem}>
                  <Text>Ranking</Text>
              </Link>

              <Link to="/voting" underlayColor='#f0f4f7' style={styles.navItem} >
                  <Text>Votar</Text>
              </Link>
            </View>

            <Route exact path="/" component={Home}/>
            <PrivateRoute path="/carte" component={Carte}/>
            <PrivateRoute path="/ranking" component={Ranking}/>
            <PrivateRoute path="/voting" component={Voting}/>
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
});
