import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tela_Envio } from './Tela_Envio/Tela_Envio';
import Login from './Login/Login'
import { HomePage } from './HomePage/HomePage';
import HomePageProvider from './context/HomePageContext';
import CompararLados from './CompararLados/CompararLados';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <HomePageProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Tela_Envio" component={Tela_Envio} options={{ title: 'Tela de envio' }} />
                    <Stack.Screen name="Login" component={Login} options={{ title: 'Página de Login' }} />
                    <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Tela inicial' }} />
                    <Stack.Screen name="CompararLados" component={CompararLados} options={{ title: 'Comparar Lados' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </HomePageProvider>
    );
}

export default App;