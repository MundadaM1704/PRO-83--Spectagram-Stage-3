import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import Feed from './screens/Feed';
import CreatePost from './screens/CreatePost';
import Profile from './screens/Profile';
import PostCard from './screens/PostCard';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
