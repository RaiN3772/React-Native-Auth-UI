import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#BEBEBE',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BEBEBE',
    marginBottom: 20,
  },
  iconContainer: {
    paddingRight: 10,
  },
  iconContainerFocused: {
    borderBottomColor: '#4CAF50',
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000000',
  },
  inputFocused: {
    color: '#4CAF50',
  },
  forgotPassword: {
    color: '#4CAF50',
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  createAccount: {
    flexDirection: 'row',
    marginTop: 30,
  },
  createAccountText: {
    color: '#000000',
  },
  createAccountLink: {
    color: '#4CAF50',
  },
});

export default styles;
