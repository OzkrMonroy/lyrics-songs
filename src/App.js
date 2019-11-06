import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario'
import axios from 'axios'

function App() {
  // Creamos los elementos del state
  const [artista, agregarArtista] = useState('')
  const [letra, agregarLetra] = useState([])
  const [info, agregarInfo] = useState({})

  // Consultar la API de letras
  const consultarApiLetra = async busqueda => {
    const {artista, cancion} = busqueda

    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

    const resultado = await axios(url)
    console.log(resultado.data.lyrics)

    agregarLetra(resultado.data.lyrics)
  }

  return (
    <Fragment>
      <Formulario
        consultarApiLetra={consultarApiLetra}
      />
    </Fragment>
  );
}

export default App;
