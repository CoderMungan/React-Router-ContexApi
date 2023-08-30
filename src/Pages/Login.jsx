import React, { useContext, useState } from 'react'
import { Yetkilendirme } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'

const database = [

    {
        name: "ömer",
        password: "12345",
        role: "User"
    }, 

    {
        name: "irem",
        password: "1234",
        role: "Admin"
    }
]


export default function Login() {
  const { setUser } = useContext(Yetkilendirme)
  const yonlendir = useNavigate()
  // stateler
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const authenticate = () => {
        
    if (username && password) {

        // boyle bir ivar mi ?
        const foundUser = database.find((kullanici) => kullanici.name === username && kullanici.password === password)

        if (!foundUser) {

           return alert("Böyle bir user yok")
        }

        // user bulunursa
        setUser(foundUser)

        // local'e kayit et
        localStorage.setItem("user", JSON.stringify(foundUser))
        // yönlendir
        yonlendir("/")
    
    }
    
  }

  return (
   


    <div className='container mt-5'>


    <div className='w-50'>
    <h3>Giriş Yap</h3>
    <hr />

    <div className='mb-3'>

        <input onChange={(e) => setusername(e.target.value)} value={username} className='form-control' type='text' placeholder='Kullanıcı Adınız'></input>
    </div>


    <div className='mb-3'>

        <input onChange={(e) => setpassword(e.target.value)} value={password} className='form-control' type='password' placeholder='Şifre'></input>
    </div>


    <div className='mb-3'>

       <button onClick={authenticate} className='btn btn-success' type='submit'>Giriş Yap</button>
    </div>

    </div>


    </div>

  )
}
