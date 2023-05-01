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

const list = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    }
})

export { styles, list }