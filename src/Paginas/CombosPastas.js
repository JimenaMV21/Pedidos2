import React, { useState } from 'react';
import {Button } from 'react-native';
import Pasta1 from '../Images/esp-removebg-preview.png';
import Pasta2 from '../Images/png-clipart-pasta-pasta-removebg-preview.png';
 

function CombosPastas({navigation}) {

  const [textoBoton1, setTextoBoton1] = useState('Combo 1 : 1 Guiso, 2 Complementos');
  const [textoBoton2, setTextoBoton2] = useState('Combo 2 : 2 Guisos, 3 Complementos');
  const [textoBoton3, setTextoBoton3] = useState('Combo 3 : 3 Guisos, 4 Complementos');

  const cambiarTexto1 = () => {
    if (textoBoton1 === 'Combo 1 : 1 Guiso, 2 Complementos') {
      setTextoBoton1('Añadido');
    } else {
      setTextoBoton1('Combo 1 : 1 Guiso, 2 Complementos');
    }
  };

  const cambiarTexto2 = () => {
    if (textoBoton2 === 'Combo 2 : 2 Guisos, 3 Complementos') {
      setTextoBoton2('Añadido');
    } else {
      setTextoBoton2('Combo 2 : 2 Guisos, 3 Complementos');
    }
  };

  const cambiarTexto3 = () => {
    if (textoBoton3 === 'Combo 3 : 3 Guisos, 4 Complementos') {
      setTextoBoton3('Añadido');
    } else {
      setTextoBoton3('Combo 3 : 3 Guisos, 4 Complementos');
    }
  };

    return (
      <div style={{ 
        backgroundImage: "url('https://us.123rf.com/450wm/molaruso/molaruso1701/molaruso170100140/70188787-gradiente-resumen-de-desenfoque-de-fondo-horizontal-con-rojo-tendencia-en-colores-pastel-naranja.jpg?ver=6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"100vh",
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center'
      }}>
      <header>
        <h1 className="h1">¿Qué tipo de Combo te gustaría?</h1>
      </header>
      <br />

      <button className="btn BotonLista" onClick={cambiarTexto1}>
              {textoBoton1}
      </button>

      <br />
      <br />

      <button className="btn BotonLista" onClick={cambiarTexto2}>
              {textoBoton2}
      </button>

      <br />
      <br />

      <button className="btn BotonLista" onClick={cambiarTexto3}>
              {textoBoton3}
      </button>

      <br />
      <br />
      <br />
      <br />

      <div className="Imagen">
        <img width="300" height="200" src={Pasta1} alt="Pasta1" />
        <img width="300" height="200" src={Pasta2} alt="Pasta2" />
        <img width="300" height="200" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49668/spaghetti-emoji-clipart-xl.png" alt="Pasta3" />
      </div>

      <Button
        title="Siguiente"
        color="red"
        onPress={() => navigation.navigate('MenuPastas')}
      />

      </div>
    );

}

export default CombosPastas;