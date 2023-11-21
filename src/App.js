import './App.css';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pantallas
import Inicio from './Paginas/Inicio';
import CombosPastas from './Paginas/CombosPastas';
import CombosEnsaladas from './Paginas/CombosEnsaladas';
import MenuEnsaladas from './Paginas/MenuEnsaladas'; 
import MenuPastas from './Paginas/MenuPastas';
import Complementos from './Paginas/Complementos';
import MenuAderezos from './Paginas/MenuAderezos';
import Pagos from './Paginas/Pagos';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="CombosEnsaldas" component={CombosEnsaladas}/>
        <Stack.Screen name="CombosPastas" component={CombosPastas}/>
        <Stack.Screen name="MenuEnsaladas" component={MenuEnsaladas}/>
        <Stack.Screen name="MenuPastas" component={MenuPastas}/>
        <Stack.Screen name="Complementos" component={Complementos}/>
        <Stack.Screen name="MenuAderezos" component={MenuAderezos}/>
        <Stack.Screen name="Pagos" component={Pagos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;