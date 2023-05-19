import React, { useEffect, useState } from 'react'
import { addInfoCar, handleChangeMarca, handleImageChange, putData, updateData, validate } from '../js/options';
import Swal from 'sweetalert2';

const Formulario = () => {

  const [opcionesMarca, setOpcionesMarca] = useState([
    { value: '0', label: '-- Seleccione --' },
    { value: '2', label: 'Audi' },
    { value: '3', label: 'Mazda' },
    { value: '4', label: 'Chevrolet' },
    { value: '5', label: 'Ford' },
    { value: '6', label: 'BMW' },
    { value: '7', label: 'Jetta' }
  ]);

  // const [infoCar, setInforCar] = useState([]);
  const [niv, setNiv] = useState('');
  const [marca, setMarca] = useState(opcionesMarca[0]);
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [precio, setPrecio] = useState('');
  const [km, setKm] = useState('');
  const [imagen, setFoto] = useState('');
  const [enviar, setEnviar] = useState('Guardar');
  const [aux, setAux] = useState(validate());

  // let dataAct=[];
  const objHooks = { niv, marca, modelo, anio, precio, km, imagen };
  const objSetHooks = { setNiv, setMarca, setModelo, setAnio, setPrecio, setKm, setFoto, setEnviar, setAux };

  useEffect(() => {
    // console.log(aux);
    if (!aux) {
      putData(objSetHooks, opcionesMarca);
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number(marca.value) === 0) {
      // console.log('Agrege');
      Swal.fire('Por favor, seleccione una Marca valida!');
    } else {
      if (aux) {
        const datos = { id: niv, marca: marca.label, modelo: modelo, anio: anio, precio: precio, km: km, foto: imagen };
        addInfoCar(datos, clean);
      } else {
        updateData(objHooks, objSetHooks, opcionesMarca);
      }
    }

    // clean();
  }

  const clean = () => {
    setNiv('');
    setMarca(opcionesMarca[0]);
    setModelo('');
    setAnio('');
    setPrecio('');
    setKm('');
    setFoto(null);
  }


  return (
    <>
      <div className='container'>
        <div className="card">
          <h1 className="cardheader text-center">Registro de Vehiculos</h1>
          <div className="card-body">

            <div className="form">
              <form onSubmit={handleSubmit}>

                <div className="row">
                  <div className='col-md-6'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">NIV:</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        value={niv} onChange={(e) => setNiv(e.target.value)} disabled={!aux} required />
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Marca:</span>
                      <select className="form-select" aria-label="Default select example" id='marca' value={marca.value} onChange={(e) => handleChangeMarca(e, opcionesMarca, setMarca, setOpcionesMarca)}>
                        {opcionesMarca.map((opcion) => (
                          <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className='col-md-6'>
                    <div className="input-group mb-default">
                      <span className="input-group-text" id="inputGroup-sizing-default">Modelo:</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        value={modelo} onChange={(e) => setModelo(e.target.value)} required />
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Año:</span>
                      <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        value={anio} onChange={(e) => setAnio(e.target.value)} required />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className='col-md-6'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Precio:</span>
                      <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Kilometraje:</span>
                      <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        value={km} onChange={(e) => setKm(e.target.value)} required />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupFile01">Foto:</label>
                  <input type="file" className="form-control" id="inputGroupFile01" accept='image/*' onChange={(e) => handleImageChange(e, setFoto)} />
                </div>

                <div className='row'>
                  {imagen && <div className='text-center'>Archivo seleccionado: {imagen.name}</div>}
                </div>

                <div className="text-center">
                  <div className="d-flex justify-content-evenly">
                    {/* <button type="submit" className='btn btn-danger col-4' onClick={clean(objSetHooks, opcionesMarca)}>Cancelar</button> */}
                    <button type="submit" className='btn btn-primary col-4'>{enviar}</button>
                  </div>
                </div>

              </form>

            </div> {/* Cierra form */}
          </div> {/* Cierra card-body */}
        </div > {/* Cierra card */}
      </div > {/* Cierra container */}

    </>
  )
}

export default Formulario