import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>    
      <h1 className='heading'>Contact</h1>

      <form className='contact' action='mailto:juanmana0402@gmail.com'>
<input type='text' placeholder='Nombre'></input>
<input type='text' placeholder='Apellidos'></input>

<input type='text' placeholder='email'></input>
<textarea placeholder='Motivo de contacto'></textarea>

<input type='submit' Value='enviar'></input>

      </form>
    </div>
  )
}
