import React, { useContext, useEffect } from 'react'
import { Yetkilendirme } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const yonlendir = useNavigate()
  const { setUser } = useContext(Yetkilendirme)



  useEffect(() => {

    const model = localStorage.getItem('user')

    if (model) {
  
      localStorage.removeItem("user")
      // stateden çıkart
      setUser(null)  
      // anasayfaya
      yonlendir('/')
    }

    
  }, [])

  return (
    <div></div>
  )
}
