import React, { useState } from 'react';
import EnsaFru from '../Images/EnsaFru.jpg';
import EnsaGri from '../Images/EnsaGri.jpeg';
// import EnsaWal from '../Images/EnsaWal.jpg';
import {Button} from 'react-native';


function MenuEnsaladas2({navigation}) {
  const [textoBoton3, setTextoBoton3] = useState('Selección');
  const [textoBoton4, setTextoBoton4] = useState('Selección');
//   const [textoBoton5, setTextoBoton5] = useState('Selección');

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

//   const cambiarTexto5 = () => {
//     if (textoBoton5 === 'Selección') {
//       setTextoBoton5('Añadido');
//     } else {
//       setTextoBoton5('Selección');
//     }
//   };

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
          <h1 className="h1">¿Te gustaría otras opciones?</h1>
        </header>

        <div className="menu">
          <h2>Selecciona tus alimentos</h2>


          <article class="item">
            <p class="pasta">Ensalada de Frutas</p>
            <p class="precio">$120.00</p>
          </article>          
          
          <p>Ingredientes: Fresas, piña, uvas, kiwi, menta fresca, jugo de limón</p>


          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={EnsaFru}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto3}>
              {textoBoton3}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Ensalada Griega</p>
            <p class="precio">$220.00</p>
          </article>

          <p>Ingredientes": "Pepino, tomate, aceitunas, queso feta, cebolla roja, aceite de oliva</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={EnsaGri}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto4}>
              {textoBoton4}
            </button>
          </div>

          {/* <article class="item">
            <p class="pasta">Ensalada Waldorf</p>
            <p class="precio">$250.00</p>
          </article>

          <p>Ingredientes: Apio, manzana, nueces, uvas, mayonesa, yogur, limón</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={EnsaWal}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto5}>
              {textoBoton5}
            </button>
          </div> */}

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

export default MenuEnsaladas2;
