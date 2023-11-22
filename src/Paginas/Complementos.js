import React, { useState } from 'react';
import Papas from '../Images/Papas.jpeg';
import Vege from '../Images/Vege.jpg';
import Arroz from '../Images/Arroz.jpg';
import Pure from '../Images/Pure.jpg';
import Ensa from '../Images/Ensa.jpg';
import {Button} from 'react-native';


function MenuComplementos({navigation}) {
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
          <h1 className="h1">Nuestro Menú de Complementos</h1>
        </header>

        <div className="menu">
          <h2>Selecciona tus alimentos</h2>

          <article class="item">
            <p className="pasta">Papas Asadas</p>
            <p class="precio">$30.00</p>
          </article>

          <p>Descripción: Papas al horno con piel, sazonadas con aceite de oliva, sal y romero</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Papas}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto1}>
              {textoBoton1}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Vegetales Salteados</p>
            <p class="precio">$50.00</p>
          </article>

          <p>Descripción: Mezcla de zanahorias, brócoli y champiñones salteados con ajo y aceite de oliva</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Vege}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto2}>
              {textoBoton2}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Arroz Pilaf</p>
            <p class="precio">$50.00</p>
          </article>          
          
          <p>Descripción: Arroz cocido con cebolla, ajo y caldo de pollo</p>


          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Arroz}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto3}>
              {textoBoton3}
            </button>
          </div>

          <br />
          <br />

          <article class="item">
            <p class="pasta">Puré de papas</p>
            <p class="precio">$220.00</p>
          </article>

          <p>Descripción: Papas cocidas y machacadas con leche, mantequilla, sal y pimienta</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Pure}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto4}>
              {textoBoton4}
            </button>
          </div>

          <article class="item">
            <p class="pasta">Ensalada de Quinoa</p>
            <p class="precio">$65.00</p>
          </article>

          <p>Descripción: Quinoa cocida, aguacate, tomate, cilantro, maíz, jugo de limón</p>

          <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={Ensa}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto5}>
              {textoBoton5}
            </button>
          </div>

        </div>

        <Button
          title="Siguiente"
          color="red"
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('MenuAderezos')}
      />
      </div>
    </div>
  );
}

export default MenuComplementos;
