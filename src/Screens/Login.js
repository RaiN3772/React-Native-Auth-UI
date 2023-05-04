import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/Login';

const LoginScreen = ({ navigation }) => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon name="user-circle" size={82} color="#f2f2f2" />
      </View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subTitle}>Sign in to continue</Text>
      <View style={styles.inputContainer}>
        <View style={[styles.iconContainer, emailFocused && styles.iconContainerFocused]}>
          <Icon name="envelope" size={20} color={emailFocused ? '#4CAF50' : '#BEBEBE'} />
        </View>
        <TextInput
          placeholder="Email"
          style={[styles.input, emailFocused && styles.inputFocused]}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={[styles.iconContainer, passwordFocused && styles.iconContainerFocused]}>
          <Icon name="lock" size={20} color={passwordFocused ? '#4CAF50' : '#BEBEBE'} />
        </View>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.input, passwordFocused && styles.inputFocused]}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
      </View>
      <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.createAccount}>
        <Text style={styles.createAccountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.createAccountLink}>Create a new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
