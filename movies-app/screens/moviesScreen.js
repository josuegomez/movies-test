import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';
import { getAllMovies } from '../actions/moviesActions'


export default function App(props) {
  const dispatch = useDispatch();
  const getMoviesRequest = () => dispatch(getAllMovies());
  const isLoadding = useSelector(state =>  (state.isLoadding));
  const movies = useSelector( state =>  state.movies);

  useEffect( () => {
    getMoviesRequest()
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
      { !isLoadding && (<FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReached={getMoviesRequest}
        onEndReachedThreshold={0}

      />)}
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
