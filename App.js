import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerificationPage from './screens/VerificationPage';
import IdentityVerificationSuccessPage from './screens/IdentityVerificationSuccessPage'; // Importez la nouvelle page

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Vérification d’identité">
        <Stack.Screen
          name="Verification"
          component={VerificationPage}
          options={{ title: 'Vérification d’identité' }}
        />
        <Stack.Screen
          name="IdentityVerificationSuccess" // Nom de la nouvelle page
          component={IdentityVerificationSuccessPage} // Composant de la nouvelle page
          options={{ title: 'Succès de la vérification d’identité' }} // Options de navigation pour la nouvelle page
        />
        {/* Ajouter d'autres pages ici si nécessaire */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
