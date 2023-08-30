import React, { useContext } from 'react'
import { Yetkilendirme } from '../Context/UserContext'




export default function Home() {

  const { user } = useContext(Yetkilendirme)

  console.log("anasayfadaki user:", user)

  return (
 
    <>
    
    
    <h3>AnaSayfa</h3>
    </>
  )
}
