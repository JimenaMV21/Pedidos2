import React, { useState } from 'react';
import Pesto from '../Images/Pesto.jpeg';
import islas from '../Images/islas.jpg';
import {Button } from 'react-native';



function MenuAderezos3({navigation}) {
  const [textoBoton5, setTextoBoton5] = useState('Selección');
  const [textoBoton6, setTextoBoton6] = useState('Selección');


  const cambiarTexto5 = () => {
    if (textoBoton5 === 'Selección') {
      setTextoBoton5('Añadido');
    } else {
      setTextoBoton5('Selección');
    }
  };

  const cambiarTexto6 = () => {
    if (textoBoton6 === 'Selección') {
      setTextoBoton6('Añadido');
    } else {
      setTextoBoton6('Selección');
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
          <h1 className="h1">Elige el que más te agrade</h1>
        </header>

        <div className="menu">
          <h2>Selecciona tus alimentos</h2>

          
          <article class="item">
            <p class="pasta">Salsa Pesto</p>
            <p class="precio">$65.00</p>
          </article>

          <p>Ingredientes: Albahaca fresca, piñones, ajo, queso parmesano, aceite de oliva, sal y pimienta</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"b
              src={Pesto}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto5}>
              {textoBoton5}
            </button>
          </div>


          <article class="item">
            <p class="pasta">Aderezo Mil Islas</p>
            <p class="precio">$47.00</p>
          </article>

          <p>Ingredientes: Aceite, vinagre, pasta de tomate, pepinillos y especias</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"b
              src={islas}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto6}>
              {textoBoton6}
            </button>
          </div>


        </div>

        <Button
          title="Siguiente"
          color="red"
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('Pagos')}
      />
      </div>
    </div>
  );
}

export default MenuAderezos3;
