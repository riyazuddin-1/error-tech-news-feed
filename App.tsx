import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsList from './components/NewsList';

// Define the type for the navigation stack parameters
export type RootStackParamList = {
  'News Feed': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News Feed" component={NewsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
