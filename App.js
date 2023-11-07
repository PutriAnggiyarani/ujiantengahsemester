import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from './screens/EditProfile';
import SignUp from './screens/SignUp';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator 
    initialRouteName="Login" 
    screenOptions={({ route }) => ({
      drawerActiveBackgroundColor: '#FAA70A',
      drawerActiveTintColor : '#FAF8ED',
    })}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Sign Up" component={SignUp} />
      <Drawer.Screen name="Edit Profile" component={EditProfile} />
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
        options={{ headerShown: false,
          backgroundColor: '#FAF8ED'
        }

        }
        
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;