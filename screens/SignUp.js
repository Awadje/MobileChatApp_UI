import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './SignUp.styles';
import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';

export default class SignUp extends Component {
  render() {
    const Form = t.form.Form;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up for ShatApp</Text>

        <Form
          ref="form"
          type={Person}
          options={formOptions} />
      </View>
    );
  }
}
