import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from './datos/trabajos'

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({})
    const params = useParams()
    
    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)

        setProyecto(proyecto[0])
    }, [])

    return (


        <div className='page page-work'>

            <div className='mask'>

                <img src={`/images/${proyecto.id}.png`} alt='img'/>
            </div>
            <h1 className='heading'>{proyecto.name}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url} target='_blank' rel='noreferrer'>Ir al Proyecto</a>

        </div>
    )
}
