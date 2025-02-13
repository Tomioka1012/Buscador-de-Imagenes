
import { useMemo } from 'react';
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
  //states
  const {pathname} = useLocation();
  const isHome = useMemo(()=> pathname ==='/',[pathname]);
  return (
    <div className={`w-100 ${isHome? 'main-header' : 'normal-header'}`}>
        <nav className="navbar d-flex justify-content-between px-2 py-3 px-md-5">
            <div className="">
                <img src="/logo.png" className="logoApp"/>
            </div>
            <div className=" container-links p-2 rounded-pill d-flex gap-2">
                <Link to="/"  className=" btn-white-transparent rounded-pill"> Inicio</Link>
                <Link to="/favoritos"  className=" btn-blue rounded-pill"><i className="bi bi-heart-fill"></i> Favoritos</Link >
                <div className=" btn-blue rounded-pill ms-4"><i className="bi bi-person-circle"></i></div >
                
            </div>
        </nav>
    </div>
  )
}

export default Header