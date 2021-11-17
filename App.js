import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import Signin from './src/screens/Signin';
import SignupInfo from './src/screens/SignupInfo';
import Signup from "./src/screens/Signup";
import HomeScreen from './src/screens/HomeScreen';
import Friends from './src/screens/Friends';
import Split from './src/screens/Split';
import SplitGroup from './src/screens/SplitGroup';
import Groups from './src/screens/Groups';
import AddGroups from './src/screens/AddGroups';
import Profile from './src/screens/Profile';
import AddFriend from './src/screens/AddFriend';
import CameraScreen from './src/screens/CameraScreen';
import {Provider as AuthProvider} from './src/context/AuthContext.js';
import {Context as AuthContext} from './src/context/AuthContext';

const AuthStack = createStackNavigator();
function authFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Signin"
        component={Signin}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
        <AuthStack.Screen
            options={{headerShown: false}}
            name="SignupInfo"
            component={SignupInfo}
        />
    </AuthStack.Navigator>
  );
}

const GroupStack = createStackNavigator();
function groupFlow() {
    return (
        <GroupStack.Navigator>
            <GroupStack.Screen
                options={{headerShown: false}}
                name="Group"
                component={Groups}
            />
            <GroupStack.Screen
                options={{headerShown: false}}
                name="AddGroups"
                component={AddGroups}
            />
            <GroupStack.Screen name="SplitGroup" component={SplitGroup} />
        </GroupStack.Navigator>
    );
}
const FriendStack = createStackNavigator();
function friendFlow() {
  return (
    <FriendStack.Navigator>
      <FriendStack.Screen
        options={{headerShown: false}}
        name="Friend"
        component={Friends}
      />
      <FriendStack.Screen
        options={{headerShown: false}}
        name="Add Friends"
        component={AddFriend}
      />
      <FriendStack.Screen name="Split" component={Split} />
      <FriendStack.Screen name="CameraScreen" component={CameraScreen} />
    </FriendStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function homeFlow() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            //determine which icon to display based on which tab use is in
            switch (route.name) {
                case "HomeScreen":
                    iconName = focused ? "home" : "home-outline";
                    break;
                case "Friends":
                    iconName = focused ? "person" : "person-outline";
                    break;
                case "Split":
                    iconName = focused ? "wallet" : "wallet-outline";
                    break;
                case "Groups":
                    iconName = focused ? "people" : "people-outline";
                    break;
                case "Profile":
                    iconName = focused ? "person-circle" : "person-circle-outline";
                    break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Friends" component={friendFlow} />
      <Tab.Screen name="Groups" component={groupFlow} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function App() {
  const {state} = React.useContext(AuthContext);
  console.log(state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token === null ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Auth"
              component={authFlow}
            />
          </>
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={homeFlow}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
