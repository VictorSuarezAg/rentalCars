import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    color: '#000',
    fontWeight: 'light',
    fontSize: 46,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: 'Roboto, sans-serif',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30
  },
  input: {
    marginBottom: 10
  },
  button: {
    backgroundColor: '#ef9b00',
    marginTop: 20,
    width: '70%'
  },
  buttonRegister: {
    backgroundColor: '#ef5000',
    marginTop: 20,
    width: '70%'
  }
});

export { styles }