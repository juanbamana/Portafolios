import React from 'react'
import { Link } from 'react-router-dom'
import { WorksList } from './WorksList'

export const Home = () => {
  return (
    <div className='home'>


      <h1>
        Hola, mi nombre es <strong>Juan Bautista Martín Navarro</strong>, soy  <strong>Desarrollador front-end</strong>, especializazdo en React js,
        y ofrezco mis servicios de <strong>programacion y desarrollo </strong> en proyectos web.
      </h1>

      <h2 className='title'>
        Te ayudo a crear y mantener tu sitio o aplicación web. <Link to="/contact">Contacta conmigo</Link>
      </h2>

      <section className='last-works'>



        <h2 className='heading'>Algunos de mis Proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <WorksList limit= "2"/>

      </section>


    </div>
  )
}
