import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleEmailValidation = () => {
    // Logique pour la validation de l'email et du code
    console.log('Email:', email);
    console.log('Code:', code);

    // Redirection vers la page "PersonalScreen"
    navigation.navigate('PersonalScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title1}>Mot de Passe oublié ?</Text>
        <Text style={styles.title2}>Pas de Panique !</Text>
        <Text style={styles.subtitle1}>Veuillez renseigner votre Email et un code vous</Text>
        <Text style={styles.subtitle2}>sera envoyé pour récupérer votre</Text>
        <Text style={styles.subtitle3}>mot de passe.</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Code de validation"
          onChangeText={(text) => setCode(text)}
          value={code}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleEmailValidation}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'black', 
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', 
    marginLeft: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 150, 
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },
  subtitle1: {
    fontSize: 18,
    color: 'black',
    marginTop: 40,
    marginBottom: 20,
  },
  subtitle2: {
    fontSize: 18,
    color: 'black',
    marginTop: -10,
    marginBottom: 20,
  },
  subtitle3: {
    fontSize: 18,
    color: 'black',
    marginTop: -12,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -200, 
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },  
  text: {
    fontSize: 16,
    color: 'black',
  },
  errorMessage: {
    color: 'black',
    marginBottom: 10,
  },
});

export default ForgetPassword;