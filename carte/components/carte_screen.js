import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Text } from 'react-native';

class CarteScreen extends React.Component {

    constructor(props){
      super(props);
    }

  componentDidMount() {

  }

  render() {
    return (
      <Text style={styles.header}>
        Pizzas Tradicionais
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

export default connect()(CarteScreen);
