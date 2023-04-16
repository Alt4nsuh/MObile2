
import Home from '../screen/Home';
import Search from '../screen/Search';
import Library from '../screen/Library';
import Profile from '../screen/Profile';
import Liked_songs from '../screen/Liked_songs';
import Login from '../screen/Login';
import Sign from '../screen/Sign';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {

    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='Library' component={Library}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Liked_songs'component={Liked_songs} />
            <Stack.Screen name='Login'component={Login} />
            <Stack.Screen name='Sign'component={Sign} />

        </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator