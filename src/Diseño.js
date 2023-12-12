// App.js
import React from 'react';
import Figura from './Figura';
import Figura1Image from './images/figura1.jpg'; // Ruta a la imagen de la Figura 1
import Figura2Image from './images/figura2.jpg'; // Ruta a la imagen de la Figura 2
import Figura3Image from './images/figura3.jpg'; // Ruta a la imagen de la Figura 3

function Diseño() {
  return (
    <div style={styles.container}>
      {/* <h1>Interfaz con ReactJS</h1> */}
      <div style={styles.row}>
        <Figura
          title="Boeing B777X-9"
          description="Bimotor de largo alcance, gran capacidad, tecnología avanzada aerodinámica."
          image={Figura1Image}
        />
        <Figura
          title="Boeing B757-200"
          description="Avión de pasillo único, medio alcance, versátil y eficiente."
          image={Figura2Image}
        />
        <Figura
          title="Airbus A330 NEO"
          description="Bimotor de largo alcance, eficiente y tecnológicamente avanzado."
          image={Figura3Image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Diseño;
