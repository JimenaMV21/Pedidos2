import React, { useState } from 'react';
import Balsa from '../Images/Balsa.jpeg';
import Salsa from '../Images/Salsa.jpeg';
import {Button } from 'react-native';



function MenuAderezos({navigation}) {
  const [textoBoton1, setTextoBoton1] = useState('Selección');
  const [textoBoton2, setTextoBoton2] = useState('Selección');

  const cambiarTexto1 = () => {
    if (textoBoton1 === 'Selección') {
      setTextoBoton1('Añadido');
    } else {
      setTextoBoton1('Selección');
    }
  };

  const cambiarTexto2 = () => {
    if (textoBoton2 === 'Selección') {
      setTextoBoton2('Añadido');
    } else {
      setTextoBoton2('Selección');
    }
  };


  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://us.123rf.com/450wm/molaruso/molaruso1701/molaruso170100140/70188787-gradiente-resumen-de-desenfoque-de-fondo-horizontal-con-rojo-tendencia-en-colores-pastel-naranja.jpg?ver=6')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no repeat',
          height: '100vh',
        }}
      >
        <header>
          <h1 className="h1">¿Te gustaría algun Aderezo?</h1>
        </header>

        <div className="menu">
          <h2>Selecciona tus alimentos</h2>

          <article class="item">
            <p className="pasta">Vinagreta Balsámica</p>
            <p class="precio">$20.00</p>
          </article>

          <p>Ingredientes: Vinagre balsámico, aceite de oliva, mostaza Dijon, ajo, sal y pimienta</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Balsa}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto1}>
              {textoBoton1}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Salsa de Yogur</p>
            <p class="precio">$25.00</p>
          </article>

          <p>Ingredientes: Yogur natural, pepino rallado, ajo, eneldo, sal y pimienta</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Salsa}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto2}>
              {textoBoton2}
            </button>
          </div>

          <br />
          <br />


        </div>

        <Button
          title="Siguiente"
          color="red"
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('MenuAderezos2')}
      />
      </div>
    </div>
  );
}

export default MenuAderezos;
