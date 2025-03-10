import { PaperPlaneTilt, TelegramLogo } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"
import {useState} from "react";

function ContactPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [acceptWhatsapp, setAcceptWhatsapp] = useState(false)

    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [nameError, setNameError] = useState('')
    const [messageError, setMessageError] = useState('')

    const maxCharCount = 500

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
    }

    const validatePhone = (phone) => {
        if (!phone) {
            setPhoneError('Informe um telefone.')
        }

        setPhoneError('')
        return true
    }

    const validateName = (name) => {
        if (!name) {
            setNameError('Nome é obrigatório')
            return false
        }

        if (name.trim().split(' ').length < 2) {
            setNameError('Digite seu nome completo')
            return false
        }

        setNameError('')
        return true
    }

    const validateMessage = (message) => {
        if (!message) {
            setMessageError('Mensagem é obrigatória')
            return false
        }

        if (message.length < 10) {
            setMessageError('Mensagem muito curta')
            return false
        }

        if (message.length > maxCharCount) {
            setMessageError(`A mensagem excedeu o limite de ${maxCharCount} caracteres`)
            return false
        }

        setMessageError('')
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmailValid = validateEmail(email)
        const isPhoneValid = validatePhone(phone)
        const isNameValid = validateName(name)
        const isMessageValid = validateMessage(message)

        if (isEmailValid && isPhoneValid && isNameValid && isMessageValid) {
            console.log('Formulário válido, enviando...')

            navigate('/')
        }
    }

    return (
        <>
            <div className="m-5 d-flex flex-column align-items-center">
                <div className="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <TelegramLogo className="main-logo" />

                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-2">
                            <label>Endereço de email</label>
                            <input
                                type="email"
                                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                aria-describedby="emailHelp"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => validateEmail(email)}
                            />
                            {emailError && (
                                <div className="invalid-feedback">
                                    {emailError}
                                </div>
                            )}
                            <small className="form-text text-muted">Nós nunca compartilharemos o seu email com ninguém.</small>
                        </div>
                        <div className="form-group my-2">
                            <label>Telefone</label>
                            <input
                                type="text"
                                className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                                placeholder="Telefone para contato"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onBlur={() => validatePhone(phone)}
                            />
                            {phoneError && (
                                <div className="invalid-feedback">
                                    {phoneError}
                                </div>
                            )}
                        </div>
                        <div className="form-group my-2">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                placeholder="Seu nome completo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={() => validateName(name)}
                            />
                            {nameError && (
                                <div className="invalid-feedback">
                                    {nameError}
                                </div>
                            )}
                        </div>
                        <div className="form-group my-2">
                            <label>Estado</label>
                            <select className="form-control">
                                <option>São Paulo</option>
                                <option>Minas Gerais</option>
                                <option>Santa Catarina</option>
                                <option>Mato Grosso</option>
                            </select>
                        </div>
                        <div className="form-group my-2">
                            <label>Cidade</label>
                            <select className="form-control">
                                <option>São Paulo</option>
                                <option>Bauru</option>
                                <option>Botucatu</option>
                                <option>Bebedouros</option>
                            </select>
                        </div>
                        <div className="form-group my-2">
                            <label>O que deseja nos falar?</label>
                            <textarea
                                className={`form-control ${messageError ? 'is-invalid' : ''}`}
                                rows="13"
                                value={message}
                                onChange={(e) => {
                                    if (e.target.value.length <= maxCharCount) {
                                        setMessage(e.target.value);
                                    }
                                }}
                                onBlur={() => validateMessage(message)}
                                maxLength={maxCharCount}
                            ></textarea>
                            {messageError && (
                                <div className="invalid-feedback">
                                    {messageError}
                                </div>
                            )}
                            <div id="char-count" className={message.length >= maxCharCount ? "text-danger" : ""}>
                                {message.length}/{maxCharCount}
                            </div>
                        </div>
                        <div className="form-check my-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={acceptWhatsapp}
                                onChange={(e) => setAcceptWhatsapp(e.target.checked)}
                            />
                            <label className="form-check-label">Aceito receber comunicação via WhatsApp</label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-dark my-2 d-flex align-items-center jutify-content-center"
                        >
                            <span className="me-2">Enviar</span>
                            <PaperPlaneTilt />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage