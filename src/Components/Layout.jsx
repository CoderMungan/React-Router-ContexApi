import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Yetkilendirme } from '../Context/UserContext'

export default function Layout() {

    const { setUser } = useContext(Yetkilendirme)

    // user önceden login olmuş mu?
    useEffect(() => {

    const model = localStorage.getItem("user")

    if (model) {

        const user = JSON.parse(model)
        setUser(user)
    }

    }, [])


  return (


    <main>
    
    <Navbar></Navbar>

    <Outlet></Outlet>

    </main>

  )
}
