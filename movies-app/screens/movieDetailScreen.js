import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Rating} from 'react-native-ratings';
import { StatusBar } from 'expo-status-bar';


const getMovieDetails = async (movieId) => {
  if (!movieId) return false;
  const request = await fetch(`http://localhost:5000/movie/${movieId}`);
  return request.json();
}

export default (props) => {
  const { movieId } = props.route.params;
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() =>{ 
    getMovieDetails(movieId).then((details) =>{
      setMovieDetails(details);
    })
  },[])

  const durationInHours = Math.round((movieDetails.duration/60)*100)/100;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#FFF'}}>
      <Text>{movieDetails.name}</Text>
      <Image style={{width:300, height:400}} source={{uri: movieDetails.poster}} />
      <Rating
        ratingCount={10}
        imageSize={30}
        startingValue={movieDetails.rating}
        style={{ paddingVertical: 10 }}
        readonly
        
      />
      
      <Text>Duration Hours:{durationInHours}hrs</Text>
      <Text>Duration Seconds:{movieDetails.duration*60}seg</Text>
      <Text>{JSON.stringify(movieDetails, null, 2)}</Text>
      <StatusBar style="auto" />
    </View>
)}