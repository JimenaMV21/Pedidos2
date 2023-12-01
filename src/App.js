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
import MenuEnsaladas2 from './Paginas/MenuEnsaladas2';
import Complementos2 from './Paginas/Complementos2';
import MenuAderezos2 from './Paginas/MenuAderezos2';
import MenuAderezos3 from './Paginas/MenuAderezos3';
import MenuPastas2 from './Paginas/MenuPastas2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="CombosEnsaladas" component={CombosEnsaladas}/>
        <Stack.Screen name="CombosPastas" component={CombosPastas}/>
        <Stack.Screen name="MenuEnsaladas" component={MenuEnsaladas}/>
        <Stack.Screen name="MenuEnsaladas2" component={MenuEnsaladas2}/>
        <Stack.Screen name="MenuPastas" component={MenuPastas}/>
        <Stack.Screen name="MenuPastas2" component={MenuPastas2}/>
        <Stack.Screen name="Complementos" component={Complementos}/>
        <Stack.Screen name="Complementos2" component={Complementos2}/>
        <Stack.Screen name="MenuAderezos" component={MenuAderezos}/>
        <Stack.Screen name="MenuAderezos2" component={MenuAderezos2}/>
        <Stack.Screen name="MenuAderezos3" component={MenuAderezos3}/>
        <Stack.Screen name="Pagos" component={Pagos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;