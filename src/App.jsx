import React, { Suspense, useState } from "react";
import "./App.css";

import Navbar from "./componants/navbar/Navbar.jsx";
import Banner from "./componants/homepage/banner/Banner.jsx";
import Player from "./componants/player/Player.jsx";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin} />
      <Banner />

      <Suspense fallback={<div>Loading... Please wait.</div>}>
        <Player playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
      </Suspense>
    </>
  );
}

export default App;
