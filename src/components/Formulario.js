import React, { useState } from "react";

function Formulario({consultarApiLetra}) {
  // Creamos el state
  const [busqueda, agregarBusqueda] = useState({
    artista : '',
    cancion : ''
  })

  const actualizarState = e => {
    // Realiza siempre una copia del state
    agregarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
    // console.log(busqueda)
  }

  // Cuando se envia el formulario
  const enviarDatos = e => {
    e.preventDefault()

    consultarApiLetra(busqueda)
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
            onSubmit={enviarDatos}>
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      required
                      onChange={actualizarState}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Canción"
                      required
                      onChange={actualizarState}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
