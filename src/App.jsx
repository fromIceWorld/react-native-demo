// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MessageScreen} from './tabs/Message.tsx';
import {Tabs} from './tabs/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Message"
//         onPress={() => navigation.navigate('Message', {userID: Math.random()})}
//       />
//       <Button
//         title="Go to Tabs"
//         onPress={() => navigation.navigate('Tabs', {userID: Math.random()})}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function DemoScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Demo" component={DemoScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{title: 'My Home'}}
  //       />
  //       <Stack.Screen name="Message" component={MessageScreen} />
  //       <Stack.Screen name="Tabs" component={Tabs} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  // return <Text>123</Text>;
}

export default App;
