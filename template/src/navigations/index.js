import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import PostDetailScreen from '../screens/PostDetail';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Detail" 
        options={({navigation}) => ({
            headerTitle: () => <Text></Text>,
            headerBackTitle:'Back'
           // headerRight: () => <Button title="Test" onPress={() => navigation.navigate('Home')} />,
           // headerLeft: () => <TouchableOpacity title="back home" onPress={() => navigation.goBack()} ><Text>Back</Text></TouchableOpacity>,
          })}
        component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;