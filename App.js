import { StyleSheet, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import '@tamagui/core/reset.css';
import { TamaguiProvider, View } from '@tamagui/core';
import PersonalInfo from "./screens/PersonalInfo";
import PersonalInfoBis from "./screens/PersonalInfoBis";


const Stack =  createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Landing Page"
        component={LandingPage}
      />
          <Stack.Screen name= "PersonalInfo" options={{title:'Creer Compte'}} component={PersonalInfo} />
          <Stack.Screen name="PersonalInfoBis" component={PersonalInfoBis}/>
      </Stack.Navigator>
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
  viewStyle:{
    margin:10,
    backgroundColor:'red'
  }
});
