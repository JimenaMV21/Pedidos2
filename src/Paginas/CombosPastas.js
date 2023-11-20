import React from "react";
import Pasta1 from '../Images/esp-removebg-preview.png';
import Pasta2 from '../Images/png-clipart-pasta-pasta-removebg-preview.png';
 

function CombosPastas() {
    return (
      <div style={{ 
        backgroundImage: "url('https://us.123rf.com/450wm/molaruso/molaruso1701/molaruso170100140/70188787-gradiente-resumen-de-desenfoque-de-fondo-horizontal-con-rojo-tendencia-en-colores-pastel-naranja.jpg?ver=6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"100vh"
      }}>
      <header>
        <h1 className="h1">Elije tu Combo</h1>
      </header>
      <br />
      
      <button className="btn BotonLista">
      <strong>
        Combo 1 : 1 Guiso,  2 Complementos 
      </strong>
      </button>

      <br />
      <br />

      <button className="btn BotonLista">
      <strong>
        Combo 2 : 2 Guisos, 3 Complementos
      </strong>
      </button>

      <br />
      <br />

      <button className="btn BotonLista">
      <strong>
        Combo 3 : 3 Guisos, 4 Complementos
      </strong>
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

      </div>


    );

}

export default CombosPastas;