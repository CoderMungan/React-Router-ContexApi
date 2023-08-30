import { createContext, useState } from "react";

export const Yetkilendirme = createContext()



export default function UserContext(props) {

    const [user, setUser ] =  useState(null)
    
    const auth = {
        user: user,
        setUser: setUser
    }

    return (

    <>

    <Yetkilendirme.Provider value={auth}>

        {props.children}

    </Yetkilendirme.Provider>

    
    </>
  )
}
