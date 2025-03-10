import { ArrowFatLeft, SignIn, UserCircle } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router-dom"
import {useState} from "react";

function RegisterPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            setEmailError('Email inválido')
            return false
        }

        const parts = email.split('@')
        if (parts.length !== 2 || !parts[1].includes('.') || parts[1].length < 3) {
            setEmailError('Email inválido')
            return false;
        }

        setEmailError('')
        return true
    };

    const validatePassword = (password) => {
        if (password.length < 6) {
            setPasswordError('Senha inválida')
            return false
        }

        setPasswordError('')
        return true
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmailValid = validateEmail(email)
        const isPasswordValid = validatePassword(password)

        if (isEmailValid && isPasswordValid) {
            console.log('Form is valid, submitting...')

            navigate("/")
        }
    };
    return (
        <>
            <div className="m-5 d-flex flex-column align-items-center">
                <div className="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <UserCircle className="main-logo" />

                    <form id="registerForm" onSubmit={handleSubmit}>
                        <div className="form-group my-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                placeholder="Email para cadastro"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => validateEmail(email)}
                                required
                            />
                            {emailError && (
                                <div className="invalid-feedback">
                                    {emailError}
                                </div>
                            )}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="confirmEmail">Confirme o Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Confirme o email"
                                value={confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                placeholder="Sua senha de acesso"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => validatePassword(password)}
                                required
                            />
                            {passwordError && (
                                <div className="invalid-feedback">
                                    {passwordError}
                                </div>
                            )}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="confirmPassword">Confirme a Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirme a senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-row gap-3">
                            <button type="submit" className="btn btn-dark my-2 d-flex align-items-center">
                                <span className="me-2">Registrar</span>
                                <SignIn />
                            </button>
                            <Link to="/login" className="btn btn-warning my-2 d-flex align-items-center">
                                <span className="me-2">Voltar</span>
                                <ArrowFatLeft />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage