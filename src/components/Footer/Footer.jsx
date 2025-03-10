import { Link } from "react-router-dom"
import agotechLogo from "../../assets/agriculture.svg"
import './style.css'

function Footer() { 
    return (
        <>
            <div className="row p-3 bg-secondary shadow-sm mt-auto">
                <div className="col-6">
                    <div className="d-flex align-items-center">
                        <Link to="/">
                            <img src={agotechLogo} alt="Logo Agrotech" className="me-3 main-logo" />
                            <span className="fs-3 text-color">Agrotech</span>
                        </Link>
                    </div>
                    <p className="mt-3 text-color">© Copyright 2024 Agrotech</p>
                </div>
                <div className="col-4">                
                    <ul>
                        <li>
                            <Link to="/contact" className="text-color">
                                Fale Conosco
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-color">
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link to="*" className="text-color">
                                Políticas de privacidade
                            </Link>
                        </li>
                        <li>
                            <Link to="*" className="text-color">
                                Termos de utilização
                            </Link>
                        </li>
                    </ul>
                </div>            
            </div>
        </>
    )
}

export default Footer