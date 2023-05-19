import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Curriculum } from '../components/Curriculum'
import { Services } from '../components/Services'
import { Briefcase } from '../components/Briefcase'
import { Footer } from '../components/layout/Footer'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Proyecto } from '../components/Proyecto'
export const MyRoutes = () => {


    return (

        <BrowserRouter>


            <HeaderNav />

            <section className='content'>
                <Routes>

                    <Route path='/' element={<Navigate to="/home" />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/briefcase' element={<Briefcase />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />
                    <Route path='*' element={<h1 className='heading'>Error 404</h1>} />

                </Routes>

            </section>
            <Footer />

        </BrowserRouter>



    )
}
