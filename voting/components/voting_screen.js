import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Text } from 'react-native';

class VotingScreen extends React.Component {

    constructor(props){
      super(props);
    }

  componentDidMount() {

  }

  render() {
    return (
      <Text style={styles.header}>
        Voce pode votar em 3 pizzas de sua preferência.
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

export default connect()(VotingScreen);
