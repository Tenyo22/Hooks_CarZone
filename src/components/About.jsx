import React from 'react'

import '../styles/about.css'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>Historia</h2>
            <p>Había una vez, en un pequeño rincón de México, una modesta yarda de salvamento llamada CarZone. Fundada con pasión y determinación, esta empresa familiar soñaba con marcar la diferencia en la industria automotriz. Con el tiempo, su visión se expandió más allá de las fronteras, llegando a convertirse en un líder global en venta de vehículos seminuevos y usados en línea.</p>
            <p>La historia de CarZone está impregnada de perseverancia y una búsqueda incesante de la excelencia. A medida que la empresa crecía, su enfoque se centraba en impulsar la innovación, basándose en datos y tecnología de vanguardia. CarZone se dio cuenta de que la clave para revolucionar la experiencia de compra de automóviles radicaba en ofrecer un amplio catálogo de autos garantizados y certificados</p>
            <p>CarZone formalizó la industria automotriz, estableciendo nuevos estándares de calidad y confiabilidad. Siguiendo los pasos de gigantes como Chevrolet y Ford, CarZone se posicionó como una marca reconocida en el mercado, sinónimo de integridad y satisfacción del cliente.</p>
          </div>
          <div className="col-lg-3">
            <img src="./img/yonker.jpg" className='img mx-auto' alt="Yonker" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3">
            <img src="./img/sostenible.jpg" className='img mx-auto' alt="Sostenibilidad" />
          </div>
          <div className="col-lg-8">
          <h2 style={{ textAlign: 'center' }}>Objetivo</h2>
            <p>Nos enfocamos en cambiar la forma en que las personas acceden y experimentan la movilidad. Conscientes de la importancia de la sostenibilidad y la innovación en el mundo moderno, CarZone se embarcó en el camino hacia un futuro más verde y eficiente. La compañía comenzó a explorar activamente opciones de vehículos eléctricos y soluciones de movilidad inteligente, con el objetivo de ofrecer alternativas responsables y accesibles a sus clientes.</p>
            <p>Nuestra empresa está impulsada por los datos, la tecnología y la innovación. Hemos revolucionado la industria automotriz al ofrecer un amplio catálogo de autos garantizados y certificados, brindando a nuestros clientes la confianza que necesitan al comprar un vehículo.</p>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  )
}

export default About