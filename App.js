import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import EmailValidation from './screens/EmailValidation';
import ForgetPassword from './screens/ForgetPassword';
import PersonalInfo from './screens/PersonalInfo';
import HomePage from './screens/HomePage';
import DetailTransaction from './screens/detailTransaction';
import ScreenBottomNavHandler from './screens/ScreenBottomNavHandler';
import CardActivationPagebis from './screens/CardActivationPagebis';
import CardNumberEntryPage from './screens/CardNumberEntryPage';
import ActivationConfirmationPage from './screens/ActivationConfirmationPage';
import CardManagementPage from './screens/CardManagementPage';
import ActivationStepsPage from './screens/ActivationStepsPage';
import SecurityCodePage from './screens/SecurityCodePage';
import CardActivationCompletionPage from './screens/CardActivationCompletionPage'; 
import IdentityVerificationSuccessPage from './screens/IdentityVerificationSucessPage';
import VerificationPage from './screens/VerificationPage';
import AllOperationPage from './screens/AllOperationsPage';
import Plafond from './screens/Plafond';
import Virement from './screens/Virement';
import Profile from './screens/Profile';

const Stack =  createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false}}
        />

    <Stack.Screen
    name="SignUp"
    component={SignUp}
    
  />

        <Stack.Screen
      name="EmailValidation"
      component={EmailValidation}  
      
      /> 

<Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          
        />

      <Stack.Screen  
        name="IdentityVerificationSuccess"
        component={IdentityVerificationSuccessPage}
        
      />

      <Stack.Screen 
        name="VerificationPage"
        component={VerificationPage}
        
      />
    
      <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
                 <Stack.Screen
          name="PersonalScreen"
          component={PersonalInfo}
          
        />
        
        <Stack.Screen
        name="HomePage"
        component={ScreenBottomNavHandler}
        options={{ headerShown: false}}
        
      /> 
           <Stack.Screen
          name="Profile"
          component={Profile}
          
        />
      <Stack.Screen 
        name="VirementScreen"
        component={Virement}
        
      />
        
        <Stack.Screen
          name='DetailTransaction'
          component={DetailTransaction}
          
        />
        <Stack.Screen
          name="CardActivationPagebis"
          component={CardActivationPagebis}
          
        />
        <Stack.Screen
          name="CardNumberEntryPage"
          component={CardNumberEntryPage}
          
        />
        <Stack.Screen
          name="ActivationConfirmationPage"
          component={ActivationConfirmationPage}
          
        />
        <Stack.Screen
          name="CardManagementPage"
          component={CardManagementPage}
          
        />
        <Stack.Screen
          name="ActivationStepsPage"
          component={ActivationStepsPage}
          
        />
        <Stack.Screen
          name="SecurityCodePage"
          component={SecurityCodePage}
          
        />
        <Stack.Screen
          name="CardActivationCompletionPage"
          component={CardActivationCompletionPage}
          
        />
        <Stack.Screen
          name='allOperations'
          title="Operations"
          component={AllOperationPage}
          
        />
        <Stack.Screen 
          name="Plafond"
          component={Plafond}
          
        />
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
});
