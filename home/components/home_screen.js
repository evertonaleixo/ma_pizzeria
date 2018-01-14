import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import renderIf from '../../utils/components/renderIf';

import checkoutTableAction from '../actions/checkout_table_action'
import chooseTableAction from '../actions/choose_table_action'

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  login = () => {
    if(this.props.homeReducer.loggedIn) {
      this.props.checkoutTableAction(this.props.homeReducer.table_id);
    } else {
      this.props.chooseTableAction(this.props.homeReducer.table_id)
    }
  }

  render() {
    let tableNum = this.props.homeReducer.table_id+'';
    let btn_text = !this.props.homeReducer.loggedIn ? ('Estou na mesa ') : 'Trocar de mesa';

    return (
      <View>
        {renderIf(!this.props.homeReducer.loggedIn)(
          <View>
            <Text style={styles.header}>
              Ola!! Qual a sua mesa?
            </Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              
            />
          </View>
        )}

        <Button
          onPress={this.login}
          title={btn_text}
          color="#841584"
          accessibilityLabel={btn_text}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

function mapStateToProps(state) {
  return {
    homeReducer: state.homeReducer
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({
    checkoutTableAction,
    chooseTableAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
