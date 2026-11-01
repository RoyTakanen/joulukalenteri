import { useState } from 'react'

export default function AdventCalendar() {
    const [imageSrc, setImageSrc] = useState("");

    const testingMode = true;

    const openImage = (day) => {
        if ((new Date()).getMonth() != 11 && testingMode == false) {
            return alert("Ei joulukuu!");
        }

        if ((new Date()).getDate() < day) {
            return alert("Väärä päivä!");
        }

        console.log("Avattu " + day)

        setImageSrc("https://picsum.photos/1920/1080")
    }


    return (
        <>
            <div className="container">
                <div className="window sidebar">
                    <div className="title-bar">
                        <h1 className="title">Luukut</h1>
                    </div>
                    <ul>
                        {Array.from({length:24}, (v, k) => k + 1).map((day) => (
                            <li key={day} >
                                <a key={day} onClick={() => openImage(day)} style={{ "cursor": "pointer" }}>
                                    Luukku {day}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="window main">
                    <div className="title-bar">
                        <h1 className="title">Joulukalenteri</h1>
                    </div>
                    <img src={imageSrc} />
                </div>
            </div>
        </>
    )
}