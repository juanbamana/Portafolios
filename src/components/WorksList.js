import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from './datos/trabajos'

export const WorksList = ({limit}) => {
  return (

    <section className='works'>
      {
        trabajos.slice(0,limit).map(trabajo => (

          <article key={trabajo.id} className='work-item'>
            <div className='mask'>

              <img src={`/images/${trabajo.id}.png`} alt={'dsdsd'} />
            </div>
            <h2><Link to={`/proyecto/${trabajo.id}`}>{trabajo.name}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>

          </article>
        ))
      }
    </section>


  )
}
