import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Tela_Envio} from './Tela_Envio/Tela_Envio';
import Login from './Login/Login'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tela_Envio" component={Tela_Envio} options={{title: 'Tela de envio'}} />
                <Stack.Screen name="Login" component={Login} options={{title: 'Página de Login'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;