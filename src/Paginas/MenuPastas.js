import React, { useState } from 'react';
import PastaBol from '../Images/pastaBol.jpeg';
import PastaCar from '../Images/PastaCar.jpeg';
import PastaAl from '../Images/PastaAl.jpeg';
import PastaLa from '../Images/PastaLa.jpeg';
import {Button } from 'react-native';


function MenuPastas({navigation}) {
  const [textoBoton1, setTextoBoton1] = useState('Selección');
  const [textoBoton2, setTextoBoton2] = useState('Selección');
  const [textoBoton3, setTextoBoton3] = useState('Selección');
  const [textoBoton4, setTextoBoton4] = useState('Selección');

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

  const cambiarTexto3 = () => {
    if (textoBoton3 === 'Selección') {
      setTextoBoton3('Añadido');
    } else {
      setTextoBoton3('Selección');
    }
  };

  const cambiarTexto4 = () => {
    if (textoBoton4 === 'Selección') {
      setTextoBoton4('Añadido');
    } else {
      setTextoBoton4('Selección');
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
          backgroundImage:
            "url('https://us.123rf.com/450wm/molaruso/molaruso1701/molaruso170100140/70188787-gradiente-resumen-de-desenfoque-de-fondo-horizontal-con-rojo-tendencia-en-colores-pastel-naranja.jpg?ver=6')",
        }}
      >
        <header>
          <h1 className="h1">Nuestro Menú de Pastas</h1>
        </header>

        <div className="menu">
          <h2>Selecciona tus alimentos</h2>

          <article class="item">
            <p className="pasta">Pasta a la Boloñesa</p>
            <p class="precio">$120.00</p>
          </article>

          <p>Caracteristicas: Esta deliciosa salsa roja, combina carne molida, zanahorias, apio, cebolla, tomates, y con un toque de leche para darle cremosidad</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={PastaBol}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto1}>
              {textoBoton1}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Pasta Carbonara</p>
            <p class="precio">$350.00</p>
          </article>

          <p>Caracteristicas: La pasta carbonara, la cual incluye huevos, bacon, pimienta negra y queso Pecorino romano</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={PastaCar}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto2}>
              {textoBoton2}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Pasta Alfredo</p>
            <p class="precio">$250.00</p>
          </article>          
          
          <p>Caracteristicas: Los fettuccine Alfredo son un plato italiano hecho con fettuccine, mantequilla y queso parmesano</p>


          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={PastaAl}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto3}>
              {textoBoton3}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Pasta Lasaña</p>
            <p class="precio">$350.00</p>
          </article>

          <p>Caracteristicas: Plato tradicional de la cocina italiana que se prepara con láminas de pasta superpuestas, rellenas de  carne y queso</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={PastaLa}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto4}>
              {textoBoton4}
            </button>
          </div>
        </div>

        <Button
          title="Siguiente"
          color="red"
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('Complementos')}
      />
      </div>
    </div>
  );
}

export default MenuPastas;
