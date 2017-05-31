import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './SignUp.styles';
import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
  }


  render() {
    const Form = t.form.Form;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up for ShatApp</Text>
      <Form
      ref="form"
      type={Person}
      options={formOptions} />

      <TouchableHighlight
      style={styles.button}
      onPress={this.onSubmit}
      underlayColor='#99d9f4'
      >

      <Text style={styles.buttonText}>Sign up</Text>
      </TouchableHighlight>
      </View>
    );
  }
}
