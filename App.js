// In App.js in a new project

import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import EditProfile from './screens/EditProfile';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator 
    initialRouteName="Home" 
    screenOptions={({ route }) => ({
      drawerActiveBackgroundColor: '#FAA70A',
      drawerActiveTintColor : '#FAF8ED',
    })}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="EditProfile" component={EditProfile} />
    </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='MainDrawer'
        component={MainDrawer}
        options={{ headerShown: false
        }

        }
        
        />
        <Stack.Screen 
        name="Edit Profile" 
        component={EditProfile}
        options={{
          headerStyle:{
            backgroundColor: '#FAF8ED'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;