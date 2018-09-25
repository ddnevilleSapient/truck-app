import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as LoginActions from 'actions/loginActions';
import copy from 'resources/copy.json';

const styles = {
  headline: {
    fontSize: 50,
  },
};

class LoginPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    loginActions: PropTypes.object.isRequired,
  };

  state = {
    world: copy['loginPage.headline.text'],
  };

  sendDispatchMessage = () => {
    const { loginActions: { login } } = this.props;
    login('Joe Blow');
  }

  render() {
    const { title } = this.props;
    const { world } = this.state;

    return (
      <View>
        <Text style={styles.headline}>
          {title}
          {world}
        </Text>
        <Button
          onPress={this.sendDispatchMessage}
          title={copy['loginPage.button.text']}
          color="#841584"
          accessibilityLabel={copy['loginPage.button.text']}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.login.title,
});


const mapDispatchToProps = (dispatch) => ({
  loginActions: bindActionCreators(LoginActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
