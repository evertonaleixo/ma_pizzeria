import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { fakeAuth } from '../../utils/components/fake-auth';
import renderIf from '../../utils/components/renderIf';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  login = () => {
    if(!fakeAuth.isAuthenticated) {
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true })
      })
    } else {
      fakeAuth.signout(() => {
        this.setState({ redirectToReferrer: false })
      })
    }
  }

  render() {
    let tableNum = (this.state != null && this.state.text != null) ? this.state.text : '';
    let btn_text = !fakeAuth.isAuthenticated ? 'Estou nesta mesa' : 'Trocar de mesa';

    return (
      <View>
        {renderIf(!fakeAuth.isAuthenticated)(
          <View>
            <Text style={styles.header}>
              Ola!! Qual a sua mesa?
            </Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={tableNum}
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

export default connect()(HomeScreen);
