import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
       <TouchableOpacity onPress={() => navigation.navigate('Liked_songs')}>
          <Text >Login</Text>
        style={styles.button}
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
