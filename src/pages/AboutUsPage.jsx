import {UsersThree} from "@phosphor-icons/react";

function AboutUsPage() {
    const membros = [
        {
            nome: "Enrico Brosque Palma",
            rm: "RM559346"
        },
        {
            nome: "Jeferson Maciel",
            rm: "RM553863"
        },
        {
            nome: "Felipe Vaz Coelho",
            rm: "RM560129"
        }
    ]

    return (
        <>
            <div className="m-5 d-flex justify-content-center">
                <div className="p-5 row bg-white rounded d-flex w-50 justify-content-center">
                    <UsersThree className="main-logo"/>
                    <b className="text-center">Membros do Grupo</b>
                    <div className="mt-5">
                        {membros.map((membro, index) => (
                            <div key={index} className="member-item mb-3 p-2 border-bottom">
                                <h5>{membro.nome}</h5>
                                <p className="text-secondary">{membro.rm}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUsPage