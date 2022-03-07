import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela_Envio from './Tela_Envio';
import Relatorio from './Relatorio';
import xls from './RelatorioAux/Xls'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Tela_Envio' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tela_Envio" component={Tela_Envio} options={{title: 'Tela de envio'}} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
                <Stack.Screen name="xls" component={xls} options= {{title: 'Download XLS'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;