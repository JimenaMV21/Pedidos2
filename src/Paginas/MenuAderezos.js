import React, { useState } from 'react';
import Balsa from '../Images/Balsa.jpeg';
import Salsa from '../Images/Salsa.jpeg';
import Aderezo from '../Images/Aderezo.jpg';
import Vinagreta from '../Images/Vinagreta.jpeg';
import Pesto from '../Images/Pesto.jpeg';


function MenuAderezos() {
  const [textoBoton1, setTextoBoton1] = useState('Selección');
  const [textoBoton2, setTextoBoton2] = useState('Selección');
  const [textoBoton3, setTextoBoton3] = useState('Selección');
  const [textoBoton4, setTextoBoton4] = useState('Selección');
  const [textoBoton5, setTextoBoton5] = useState('Selección');

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

  const cambiarTexto5 = () => {
    if (textoBoton5 === 'Selección') {
      setTextoBoton5('Añadido');
    } else {
      setTextoBoton5('Selección');
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
          <h1 className="h1">Nuestro Menú de Aderezos</h1>
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

          <article class="item">
            <p class="pasta">Aderezo Ranch</p>
            <p class="precio">$32.00</p>
          </article>          
          
          <p>Ingredientes: Mayonesa, suero de leche, cebolla en polvo, ajo en polvo, eneldo, perejil, sal y pimienta</p>


          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Aderezo}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto3}>
              {textoBoton3}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Vinagreta de Mostaza y Miel</p>
            <p class="precio">$30.00</p>
          </article>

          <p>Ingredientes: Mostaza Dijon, miel, vinagre de vino tinto, aceite de oliva, sal y pimienta</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Vinagreta}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto4}>
              {textoBoton4}
            </button>
          </div>

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


        </div>
      </div>
    </div>
  );
}

export default MenuAderezos;
