import React from "react";

function CombosEnsaladas() {
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
        <img width="300" height="200" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58449/green-salad-emoji-clipart-md.png" alt="Ensalada1" />
        <img width="300" height="200" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/57185/green-salad-emoji-clipart-md.png" alt="Ensalada2" />
        <img width="300" height="200" src="https://images.vexels.com/media/users/3/141144/isolated/preview/41f85e7307c63d96eda93599bccd9f51-plato-de-ensalada.png" alt="Ensalada3" />
      </div>

      </div>


    );

}

export default CombosEnsaladas;