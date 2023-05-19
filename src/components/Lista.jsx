import React, { useState } from 'react'
import { handleDelete, handleEdit, selectInfoCar } from '../js/options'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

import '../styles/lista.css'

const Lista = () => {
  const [info, setInfoCar] = useState(selectInfoCar());
  const navigate = useNavigate();

  // setInfoCar(selectInfoCar())
  // console.log(info)

  const handleOptions = (item) => {
    // console.log(item)
    Swal.fire({
      title: 'Elige la opcion que desea hacer:',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Edit',
      denyButtonText: `Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
        handleEdit(item, setInfoCar)
        navigate('/register');
      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
        handleDelete(item, setInfoCar)
      }
    })
  }

  return (
    <>
      <div className="container">

        <div className='row'>
          {/* Tabla de alumnos */}
          <h2>Vehiculos en Inventario</h2>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>NIV</th>
                <th scope='col'>Marca</th>
                <th scope='col'>Modelo</th>
                <th scope='col'>Año</th>
                <th scope='col'>Kilometraje</th>
                <th scope='col'>Precio</th>
                <th scope='col'>Imagen</th>
                <th scope='col'>Opciones</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {info.map((item, index) => (
                <tr key={index}>
                  <th scope='row' className='align-middle'>{item.id}</th>
                  <td className='align-middle'>{item.marca}</td>
                  <td className='align-middle'>{item.modelo}</td>
                  <td className='align-middle'>{item.anio}</td>
                  <td className='align-middle'>{item.km}</td>
                  <td className='align-middle'>{item.precio}</td>
                  <td className='align-middle'>{item.foto ? <img src={URL.createObjectURL(item.foto)} alt='Foto' /> : ''}</td>
                  <td className="align-middle">
                    <button type='button' className='btn btn-link' onClick={() => handleOptions(item)}>
                      <i className="fas fa-cogs fs-3" ></i>
                      {/* <i className="fas fa-edit"></i> */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Lista