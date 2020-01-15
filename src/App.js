import React, { useEffect, useState } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

export default function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setlongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setlongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                required
                value={latitude}
                type="number"
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
                type="number"
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/54713276?s=460&v=4"
                alt="Maicon Gabriel Friedel"
              />
              <div className="user-info">
                <strong>Maicon Gabriel Friedel</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Junior System Analyst at Grupo Kyly.</p>
            <a href="https://github.com/maiconfriedel">
              Accesar Perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/54713276?s=460&v=4"
                alt="Maicon Gabriel Friedel"
              />
              <div className="user-info">
                <strong>Maicon Gabriel Friedel</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Junior System Analyst at Grupo Kyly.</p>
            <a href="https://github.com/maiconfriedel">
              Accesar Perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/54713276?s=460&v=4"
                alt="Maicon Gabriel Friedel"
              />
              <div className="user-info">
                <strong>Maicon Gabriel Friedel</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Junior System Analyst at Grupo Kyly.</p>
            <a href="https://github.com/maiconfriedel">
              Accesar Perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/54713276?s=460&v=4"
                alt="Maicon Gabriel Friedel"
              />
              <div className="user-info">
                <strong>Maicon Gabriel Friedel</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Junior System Analyst at Grupo Kyly.</p>
            <a href="https://github.com/maiconfriedel">
              Accesar Perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
