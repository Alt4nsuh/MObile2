import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Constants from 'expo-constants';
import Footer from '../navigation/Footer';

export default function Search() {
  return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
         <Text style={styles.title}>Search</Text>
         <View style={styles.searchBox}>
            <TextInput style={styles.searchInput} placeholder="Search..." />
         </View>
        </View>
        <View style={styles.resultContainer}>
        </View>
        
<Footer />
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    width: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  searchContainer: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBox: {
    width: '70%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
});
