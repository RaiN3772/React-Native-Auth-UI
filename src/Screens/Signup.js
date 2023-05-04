import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/SignUp';

const SignupScreen = ({ navigation }) => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Create a new account</Text>
      <View style={styles.inputContainer}>
        <View style={[styles.iconContainer, nameFocused && styles.iconContainerFocused]}>
          <Icon name="user" size={20} color={nameFocused ? '#4CAF50' : '#BEBEBE'} />
        </View>
        <TextInput
          placeholder="Name"
          style={[styles.input, nameFocused && styles.inputFocused]}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={[styles.iconContainer, emailFocused && styles.iconContainerFocused]}>
          <Icon name="envelope" size={20} color={emailFocused ? '#4CAF50' : '#BEBEBE'} />
        </View>
        <TextInput
          placeholder="Email"
          style={[styles.input, setEmailFocused && styles.inputFocused]}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={[styles.iconContainer, phoneFocused && styles.iconContainerFocused]}>
          <Icon name="phone" size={20} color={phoneFocused ? '#4CAF50' : '#BEBEBE'} />
        </View>
        <TextInput
          placeholder="Phone"
          style={[styles.input, setPhoneFocused && styles.inputFocused]}
          onFocus={() => setPhoneFocused(true)}
          onBlur={() => setPhoneFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={[styles.iconContainer, passwordFocused && styles.iconContainerFocused]}>
          <Icon name="lock" size={20} color={passwordFocused ? '#4CAF50' : '#BEBEBE'} />
        </View>
        <TextInput
          placeholder="Password"
          style={[styles.input, setPasswordFocused && styles.inputFocused]}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={[styles.iconContainer, confirmFocused && styles.iconContainerFocused]}>
          <Icon name="lock" size={20} color={confirmFocused ? '#4CAF50' : '#BEBEBE'} />
        </View>
        <TextInput
          placeholder="Confirm Password"
          style={[styles.input, setConfirmFocused && styles.inputFocused]}
          onFocus={() => setConfirmFocused(true)}
          onBlur={() => setConfirmFocused(false)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.createAccount}>
        <Text style={styles.createAccountText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.createAccountLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
