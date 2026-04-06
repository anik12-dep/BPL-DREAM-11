import React, { use } from "react";
// '../../' এর বদলে একটি '../' হবে কারণ player এবং Availableplayers একই লেভেলে আছে
import AvailablePlayers from "../Availableplayers/AvailablePlayers.jsx";

const Player = ({ playersPromise }) => {
  const players = use(playersPromise);

  return (
    <div className="container mx-auto">
      Player: {players.length}
      <AvailablePlayers players={players} />
    </div>
  );
};

export default Player;
