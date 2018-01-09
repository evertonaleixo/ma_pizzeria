import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { fakeAuth } from '../../utils/components/fake-auth'

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>
          Ola!! Qual a sua mesa?
        </Text>
        <TouchableHighlight style={styles.btn} underlayColor='#f0f4f7' onPress={this.login}>
          <Text>Acessar</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

export default connect()(HomeScreen);
