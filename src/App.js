
import { Route, Routes } from 'react-router-dom';
import './App.css';



// sayfalarımız
import Home from './Pages/Home';
import Users from './Pages/Users';
import Login from './Pages/Login';
import Logout from './Pages/Logout';


// component
import Layout from './Components/Layout';



function App() {


  return (
    
    <>

    <Routes>

    <Route element={<Layout></Layout>}>


        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/cikis' element={<Logout></Logout>}></Route>

        {/* hiçbirine denk gelemzse: */}
        <Route path='*' element={<h1>Sayfa Bulunamadı</h1>}></Route>


    </Route>
    </Routes>
    

    
    </>
  );
}

export default App;
