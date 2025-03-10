import { CloudRain } from "@phosphor-icons/react"

function HomePage() {

    let currentTemp = 32;
    let maxTemp = 42;
    let minTemp = 20;
    let rainChance = 74;
    let humidity = 96;
    let windStrength = 11;

    return (
        <>
            <div className="m-5 d-flex gap-3">
                <div className="p-5 bg-white rounded d-flex flex-column">
                    <div className="d-flex align-items-center temp-info">
                        <div className="me-3 d-flex flex-column">
                            <CloudRain className="me-2 main-logo" />
                            <small>{currentTemp} °C</small>
                        </div>
                        <span>Chuva moderada em sua região</span>
                    </div>
                    <div className="my-4 d-flex flex-column">
                        <div className="d-flex flex-row justify-content-around">
                            <div className="my-1">
                                <small>Máx.</small>
                                <div className="p-2 max-temp rounded">
                                    <span>{maxTemp} °C</span>
                                </div>
                            </div>
                            <div className="my-1">
                                <small>Min.</small>
                                <div className="p-2 min-temp rounded">
                                    <span>{minTemp} °C</span>
                                </div>
                            </div>
                        </div>
                        <div className="temp-info d-flex justify-content-center">
                            <ul className="list-unstyled">
                                <li>
                                    <small>Precipitação: {rainChance}%</small>
                                </li>
                                <li>
                                    <small>Humidade: {humidity}%</small>
                                </li>
                                <li>
                                    <small>Vento: {windStrength} km/h</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-white rounded">
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore et consectetur laudantium eum? Velit, aliquam a quis iste minima eius omnis magnam maiores impedit. Eum placeat dicta maxime quam. Ea?
                        Sequi laboriosam consequatur corrupti harum facere perspiciatis possimus aliquam dolorum magni ut. Esse sint hic quam expedita ut provident dignissimos odio dolore, natus ex molestiae sunt assumenda tempore. Enim, sit?
                        Aliquam cumque harum quo? Quidem iure quae harum voluptate itaque nostrum aliquam, quo modi quisquam? Impedit, in, vitae consectetur exercitationem vel provident velit sit, alias autem voluptatem possimus veniam consequuntur.
                        Modi dolor vero, nostrum sit expedita, delectus quam, asperiores voluptate magni optio doloribus? Minima, doloremque, ipsa alias harum commodi temporibus quia facere tempore, odit ratione aspernatur. Suscipit error aspernatur quasi!
                        Molestiae provident non suscipit eum iste eos placeat quidem numquam pariatur rerum eveniet unde magnam veritatis similique ad perferendis, cum enim fugiat perspiciatis velit deserunt fuga. Dolor maiores porro recusandae!
                    </span>
                </div>
            </div>
        </>
    )
}

export default HomePage