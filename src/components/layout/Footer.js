import React from 'react'

export const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (

    <footer className='footer'>Portafolio @Juan Bautista Martín Navarro {currentYear}</footer>
  )
}
