import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Footer from '../navigation/Footer';

export default function Library() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <View >
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.buttonText}>Home1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home2')}>
          <Text style={styles.buttonText}>Home2</Text>
        </TouchableOpacity>
        </View>
        <View>
        </View>
        
<Footer></Footer>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: Constants.statusBarHeight,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 16,
  },
});
