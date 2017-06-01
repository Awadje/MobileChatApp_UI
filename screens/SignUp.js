// screens/SignUp.js

import React, { Component } from 'react';
import ReactNative, {
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// See: https://github.com/gcanti/tcomb-form-native
import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';
import loadUser from '../actions/users/load';
import signUp from '../actions/users/sign-up';
import styles from './SignUp.styles';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { newUser: props.user };
  }

  componentWillMount() {
    this.props.loadUser();
  }

  componentDidMount() {
    // focus on the "name" field
    this.refs.form.getComponent('name').refs.input.focus();
  }

  clearForm() {
    this.setState({ newUser: null });
  }

  onChange(newUser) {
    this.setState({ newUser });
  }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
    this.props.signUp(newUser);
  }

  render() {
    const Form = t.form.Form;
    const { user, loading } = this.props;

    return (
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}>
          <Text style={styles.title}>Sign up for ShatApp</Text>
          { user && user.error ? <Text style={styles.error}>{user.error.name} { user.error.message }</Text> : null }

          <Form
            ref="form"
            type={Person}
            options={formOptions}
            value={this.state.newUser}
            onChange={this.onChange} />

            <TouchableHighlight
              disabled={loading}
              style={styles.buttonPrimary}
              onPress={this.onSubmit}
              underlayColor='#99d9f4'
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableHighlight>
            <TouchableHighlight
              disabled={loading}
              style={styles.buttonSecondary}
              onPress={Actions.signIn}
              underlayColor='#99d9f4'
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = ({ user, loading }) => ({ user, loading });

export default connect(mapStateToProps, { loadUser, signUp })(SignUp);
