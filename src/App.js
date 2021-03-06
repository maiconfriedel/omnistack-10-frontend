import React, { useEffect, useState } from "react";

import api from "./services/api";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

import "./global.css";
import "./App.css";

export default function App() {
  const [devs, setDevs] = useState([]);

  // carregar devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}
