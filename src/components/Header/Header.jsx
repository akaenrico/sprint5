import { Link } from 'react-router-dom'
import agrotechLogo from '../../assets/agriculture.svg'
import './style.css'

import { SignIn } from '@phosphor-icons/react'

function Header() {


  return (
    <>
       <nav className="py-3 px-3 bg-secondary shadow-sm">
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={agrotechLogo} alt="Logo Agrotech" className="me-3 main-logo" />
                    <Link to="/">
                        <span className="fs-3 text-color">Agrotech</span>
                    </Link>
                </div>
                
                <div className="d-flex align-items-center">
                    <ul className="list-unstyled m-0">
                        <li className="me-5">
                            <Link to="/contact" className="text-color">
                                Fale Conosco
                            </Link>
                        </li>
                    </ul>
                    <Link to="/login" className="d-flex align-items-center">
                        <span className="me-2 text-color">Entrar</span>
                        <SignIn className="text-color" />
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header