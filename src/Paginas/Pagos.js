import React, { useState } from 'react';
import tarjeta from '../Images/tarjeta.png';
import paquet from '../Images/paquet.png';

function Pagos() {
    const [textoBoton1, setTextoBoton1] = useState('Selección');
    const [textoBoton2, setTextoBoton2] = useState('Selección');

    const cambiarTexto1 = () => {
    if (textoBoton1 === 'Selección') {
      setTextoBoton1('Pagar con este método');
    } else {
      setTextoBoton1('Selección');
    }
  };

  const cambiarTexto2 = () => {
    if (textoBoton2 === 'Selección') {
      setTextoBoton2('Pagar con este método');
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
            <h1 className="h1">Pagos</h1>
            </header>

            <p className="Pagos">
                <strong>Gracias por tu compra :D </strong>
            </p>

            <div className="menu">
                Tu total es de :
            </div>

            <br/>

            <div className="totalpago">
            <strong>*Inserte Cantidad*</strong>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="menu">
                ¿Cómo te gustaría pagar?
            </div>

            <br/>

            <div className="MetodoPago">
            <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={tarjeta}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto1}>
              {textoBoton1}
            </button>
          </div> 
            </div>

            <div className="MetodoPago">
            <div className="ImagenBoton">
            <img
              className="ImaPasta"
              width="120"
              height="120"
              src={paquet}
              alt="Pasta1"
            />
            <button className="btn BotonLista" onClick={cambiarTexto2}>
              {textoBoton2}
            </button>
          </div> 
            </div>
                       
            </div>
        </div>
    );
}

export default Pagos;