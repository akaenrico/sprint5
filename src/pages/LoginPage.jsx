import { Link } from "react-router-dom"
import { Keyhole, SignIn } from "@phosphor-icons/react"

function LoginPage() {
    return (
        <>
            <div className="m-5 d-flex flex-column align-items-center">
            
                <div className="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <Keyhole className="main-logo" />

                    <form>
                        <div className="form-group my-2">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email cadastrado" id="emailLogin" />
                        </div>
                        <div className="form-group my-2">
                            <label>Senha</label>
                            <input type="password" className="form-control" placeholder="Sua senha de acesso" id="senhaLogin" />
                        </div>
                        <Link to="/">
                            <button id="btnEntrar" type="button" className="btn btn-dark my-2 d-flex align-items-center jutify-content-center">
                                <span className="me-2">Entrar</span>
                                <SignIn />
                            </button>
                        </Link>
                        <div className="form-group mt-4 mb-2">
                            <Link to="/register">
                                Ainda não é cadastrado? Se cadastre aqui!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage