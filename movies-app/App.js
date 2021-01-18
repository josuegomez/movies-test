import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store'

import MoviesScreen from './screens/moviesScreen';
import movieDetailScreen from './screens/movieDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return (
    
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Movies" component={MoviesScreen} />
            <Stack.Screen name="MovieDetails" component={movieDetailScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;