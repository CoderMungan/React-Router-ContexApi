import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Yetkilendirme } from '../Context/UserContext'



// bs dropdown
import Dropdown from 'react-bootstrap/Dropdown';

const is_authenticated = (user) => {

    if (user) {

        return <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {user.name}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="/profilim">Profilim</Dropdown.Item>
          <Dropdown.Item href="/cikis">Çıkış Yap</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    } else {

        return <NavLink to="/login">Giriş Yap</NavLink>
    } 

}

export default function Navbar() {

  const { user } = useContext(Yetkilendirme)


  return (
    


    <nav>



    <ul>

        <li className='me-auto'>

        {/* navlink active klassı ile döndürür */}
        <NavLink to="/">
            LOGO
        </NavLink>
        </li>

        <li>
           <NavLink to="/users">Users</NavLink>
        </li>

        <li>
           {is_authenticated(user)}
        </li>
    </ul>

    </nav>
  )
}
