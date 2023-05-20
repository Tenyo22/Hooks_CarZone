const { default: Swal } = require("sweetalert2");

let infoCar = [
    { id: "1HGCM82633A123456", marca: "Honda", modelo: "Accord", anio: "2012", precio: "120000", km: "120000", foto: "" },
    { id: "3FAHP0HA5AR123456", marca: "Ford", modelo: "Fusion", anio: "2010", precio: "80000", km: "80000", foto: "" },
    { id: "5YFBURHE1HP123456", marca: "Toyota", modelo: "Corolla", anio: "2017", precio: "150000", km: "50000", foto: "" },
    { id: "1FADP3K28EL123456", marca: "Ford", modelo: "Focus", anio: "2014", precio: "25000", km: "70000", foto: "" },
    { id: "3N1CN7AP3KL123456", marca: "Nissan", modelo: "Versa", anio: "2019", precio: "35000", km: "30000", foto: "" }
];
let datosAct = [];
let bandera = true;

module.exports.handleChangeMarca = (e, opcionesMarca, setMarca, setOpcionesMarca) => {
    // console.log(e.target.value);
    setMarca(opcionesMarca.find(option => option.value === e.target.value));

}

module.exports.handleImageChange = (e, setFoto) => {
    const file = e.target.files[0]

    if (file && file.type.substr(0, 5) !== 'image') {
        setFoto(null)
        // alert('Seleccione una imagen valida!')
        Swal.fire(
            'Selecciona una imagen valida!',
            '',
            'info'
        )
    } else if (file && file.name) {
        setFoto(file)
    } else {
        setFoto(null)
    }
}

module.exports.addInfoCar = (datos, clean) => {
    // setInfoCar([...infoCar, datos])
    infoCar.push(datos);
    // console.log(infoCar)
    clean()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Carro agregado',
        showConfirmButton: false,
        timer: 1500
    })
    // console.log(infoCar);
}

module.exports.selectInfoCar = () => {
    return infoCar;
}

module.exports.handleDelete = (item, setInfoCar) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "No podras revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            infoCar = infoCar.filter((obj) => obj.id !== item.id)
            setInfoCar(this.selectInfoCar);
            bandera = true;
            Swal.fire(
                'Deleted!',
                'El registro ha sido eliminado.',
                'success'
            )
        }
    })
}

module.exports.handleEdit = (item, setInfoCar) => {
    const infoCarIndex = infoCar.findIndex(obj => obj.id === item.id)
    // Respaldo y modificacion de la nueva informacion
    datosAct = infoCar[infoCarIndex]
    console.log(datosAct)
    bandera = false;
    setInfoCar(infoCar)
}

module.exports.validate = () => {
    return bandera;
}

module.exports.sendInfoCar = () => {
    return datosAct;
}

module.exports.putData = (hooks, opcionesMarca) => {
    hooks.setNiv(datosAct.id);
    hooks.setMarca(opcionesMarca.find(option => option.label === datosAct.marca));
    hooks.setModelo(datosAct.modelo);
    hooks.setAnio(datosAct.anio);
    hooks.setPrecio(datosAct.precio);
    hooks.setKm(datosAct.km);
    hooks.setFoto(datosAct.foto);
    hooks.setEnviar('Actualizar');
}

module.exports.updateData = (hooks, setHooks, opcionesMarca) => {
    // console.log(datosAct)
    // Actualizacion de informacion
    datosAct.marca = hooks.marca.label;
    datosAct.modelo = hooks.modelo;
    datosAct.anio = hooks.anio;
    datosAct.precio = hooks.precio;
    datosAct.km = hooks.km;
    datosAct.foto = hooks.imagen;

    // Actualizacion de los registros
    infoCar = infoCar.filter((obj) => obj.id !== hooks.niv)
    infoCar.push(datosAct);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Datos Actualizados',
        showConfirmButton: false,
        timer: 1500
    })

    // Limpiar campos
    // setHooks.setAux(bandera);
    // setHooks.setNiv('')
    // setHooks.setMarca(opcionesMarca[0])
    // setHooks.setModelo('')
    // setHooks.setAnio('')
    // setHooks.setPrecio('')
    // setHooks.setKm('')
    // setHooks.setFoto(null)
    // setHooks.setEnviar('Guardar');
    bandera = true;
    // setHooks.setAux(bandera);

    // console.log(infoCar);
}