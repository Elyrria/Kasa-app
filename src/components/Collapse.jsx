import "../styles/Collapse.scss"
import { useState } from "react"
import ButtonCollapse from "./ButtonCollapse"

function Collapse({ name, description, amenities }) {
    const [isActivate, setIsActivate] = useState(false)

    return (
        <div>
            {Array.isArray(amenities) && amenities.length > 0 ? (
                <div className="collapse">
                    <ButtonCollapse
                        name={name}
                        isActivate={isActivate}
                        setIsActivate={setIsActivate}
                    />
                    <div
                        className={`${
                            isActivate ? "active" : ""
                        } collapseContent`}
                    >
                        <ul>
                            {amenities.map((amenity, index) => (
                                <li
                                    key={`${amenity}-${index}`}
                                    className="collapseContent__li"
                                >
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                    <div className="collapse">
                        <ButtonCollapse
                            name={name}
                            isActivate={isActivate}
                            setIsActivate={setIsActivate}
                        />
                        <div
                            className={`${
                                isActivate ? "active" : ""
                            } collapseContent`}
                        >
                            <p className="collapseContent__para">
                                {description}
                            </p>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default Collapse
