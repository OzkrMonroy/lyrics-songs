import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Informacion from './components/Informacion'
import axios from 'axios'

function App() {
  // Creamos los elementos del state
  const [artista, agregarArtista] = useState('')
  const [letra, agregarLetra] = useState([])
  const [info, agregarInfo] = useState({})

  useEffect(() => {
    consultarApiInfo()
  }, [artista])

  // Consultar la API de letras
  const consultarApiLetra = async busqueda => {
    const {artista, cancion} = busqueda

    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

    const resultado = await axios(url)
    // console.log(resultado.data.lyrics)

    agregarLetra(resultado.data.lyrics)
    agregarArtista(artista)
  }

  // Consultar la api de informacion
  const consultarApiInfo = async () => {
    if(artista){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
  
      const resultado = await axios(url)
      console.log(resultado.data.artists[0])
      agregarInfo(resultado.data.artists[0])
    }
  }

  return (
    <Fragment>
      <Formulario
        consultarApiLetra={consultarApiLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
