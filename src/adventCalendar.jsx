import { useState, useEffect } from 'react'

export default function AdventCalendar() {
    const [imageSrc, setImageSrc] = useState(null); // cannot pass empty string to img src, causes page relaod
    const [trivia, setTrivia] = useState("Voit lisätä omat kuvasi luomalla Github-repositorion, jossa on 24 kuvaa nimettynä 01.jpg, 02.jpg, ..., 24.jpg. Sitten voit valita repositorion vasemmalta valikosta.");
    const [repoList, setRepoList] = useState([]);
    const [githubRepo, setGithubRepo] = useState("random");

    const testingMode = true;

    const openImage = (day) => {
        if ((new Date()).getMonth() != 11 && testingMode == false) {
            return alert("Ei joulukuu!");
        }

        if ((new Date()).getDate() < day) {
            return alert("Väärä päivä!");
        }

        console.log("Avattu " + day)
        console.log("Valitaan kuva lähteestä: " + githubRepo)

        if (githubRepo != "random") {
            setImageSrc(`https://raw.githubusercontent.com/${githubRepo}/master/${day.toString().padStart(2, '0')}.jpg`)
        } else {
            setImageSrc("https://picsum.photos/1920/1080");
        }

        // move to the sidebar and show the trivia
        // make it appear as a cool little snippet in the left bottom
        fetch("https://opentdb.com/api.php?amount=1").then(response => {
            return response.json();
        }).then(data => {
            setTrivia("Trivia for day: \n\n" + data.results[0].question);
        });
    }

    useEffect(() => {
        fetch("https://api.github.com/search/repositories?q=joulukalenteri-pics").then(response => {
            return response.json();
        }).then(data => {
            data.items.forEach(repo => {
                console.log(repo.full_name);
                setRepoList([...repoList, repo.full_name]);
                console.log("Repo list updated: ", repoList);
            })
        })
        console.log("test")
    }, [])

    return (
        <>
            <div className="container">
                <div className="window sidebar">
                    <div className="title-bar">
                        <h1 className="title">Luukut</h1>
                    </div>
                    <select value={githubRepo} onChange={(e) => setGithubRepo(e.target.value)}>
                        <option value="random">random</option>
                        {repoList.map((repo) => (
                            <option key={repo} value={repo}>{repo}</option>
                        ))}
                    </select>
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
                    <p>{trivia}</p>
                </div>
            </div>
        </>
    )
}