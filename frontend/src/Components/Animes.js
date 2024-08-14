import Anime from "./Anime";
import React, { useEffect, useState } from "react"


function Animes() {
  const API = process.env.REACT_APP_BASE_URL;
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/animes`)
    .then(res => res.json() )
    .then(res => {
      setAnimes(res)
  })
  .catch(err => console.error(err))
}, [])
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  return (
    <section className="index" id="anime-list">
      { animes.map((anime, index) => {
        const {name, description} = Anime
        return (
          //I didnt get to finish this part
        )
      })}
      <p>No animes to display</p>
    </section>
  );
}

export default Animes;
