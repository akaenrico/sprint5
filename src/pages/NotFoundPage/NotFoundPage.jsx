import { SmileySad } from "@phosphor-icons/react"
import './style.css'

function NotFoundPage() {
    return (
        <>
            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                    <SmileySad className="icon"/>
                    <strong className="text">404</strong>
                </div>
                <strong className="text-info_component">PÁGINA NÃO ENCONTRADA</strong>

            </div>
        </>
    )
}

export default NotFoundPage