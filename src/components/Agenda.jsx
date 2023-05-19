import React, { useState } from 'react'

const Agenda = () => {
    const [cliente, setCliente] = useState([
        { id: 1, user: 'Alfredo', car: 'Camaro', reservation: '2023-05-20', phone: '5534567890', email: 'usuario1@example.com', time: '10:00 AM' },
        { id: 2, user: 'Mario', car: 'Grand Cherokee', reservation: '2023-05-21', phone: '5576544321', email: 'usuario2@example.com', time: '11:30 AM' },
        { id: 3, user: 'Francisco', car: 'Mustang', reservation: '2023-05-22', phone: '5546205890', email: 'usuario3@example.com', time: '11:45 AM' },
        { id: 4, user: 'Javier', car: 'Cavalier', reservation: '2023-05-22', phone: '5545894023', email: 'usuario3@example.com', time: '12:00 PM' },
        { id: 5, user: 'Juan', car: 'Jetta', reservation: '2023-05-22', phone: '5589601059', email: 'usuario3@example.com', time: '12:15 PM' },
    ]);

    return (
        <>
            <div className='container'>
                <div className="row">

                    <h2>Reservaciones para Mantenimiento</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Cliente</th>
                                <th scope='col'>Telefono</th>
                                <th scope='col'>Carro</th>
                                <th scope='col'>Fecha de Reservación</th>
                                <th scope='col'>Hora de Reservación</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {cliente.map(user => (
                                <tr key={user.id}>
                                    <th scope='row' className='align-middle'>{user.id}</th>
                                    <td className='align-middle'>{user.user}</td>
                                    <td className='align-middle'>{user.phone}</td>
                                    <td className='align-middle'>{user.car}</td>
                                    <td className='align-middle'>{user.reservation}</td>
                                    <td className='align-middle'>{user.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>)
}

export default Agenda