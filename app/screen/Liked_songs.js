import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Footer from '../navigation/Footer';

const DATA = [
  {
    id: '1',
    title: 'Song 1',
    artist: 'Artist 1'
  },
  {
    id: '2',
    title: 'Song 2',
    artist: 'Artist 2'
  },
  {
    id: '3',
    title: 'Song 3',
    artist: 'Artist 3'
  },
];

const Item = ({ title, artist }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.artist}>{artist}</Text>
  </TouchableOpacity>
);

export default function Liked_songs() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Item title={item.title} artist={item.artist} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true} // Add this line to set horizontal FlatList
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  artist: {
    fontSize: 18,
    color: '#888'
  },
});
