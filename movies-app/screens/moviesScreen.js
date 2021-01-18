import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';

export default function App(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, isFetching] = useState(false);

  const getMovies = async () => {
    if (!fetching && page > 0) {
      isFetching(true);
      const request = await fetch(`http://localhost:5000/movie?limit=8&page=${page}`);
      const newMovies = await request.json();
      newMovies.length > 0 ? setPage(page +1) : setPage(-1); // @TODO refactor listing to get pagination info
      setMovies([...movies, ...newMovies ])
      isFetching(false);
    }
  }
  useEffect( () => {
    getMovies();
  },[])


  const renderItem = ({ item }) => <Item title={item.name} movieId={item._id} />;

  

  const Item = ({ title, movieId }) => (
  <TouchableHighlight
    style={styles.item}
    onPress={() => { props.navigation.navigate('MovieDetails', {movieId})}}
    underlayColor="#DDDDDD"
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableHighlight>
  );



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReached={getMovies}
        onEndReachedThreshold={0}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#CACACA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
