import { use, useState } from "react";

import AvailablePlayers from "../Availableplayers/AvailablePlayers.jsx";
import SelectedPlayers from "../selectedplayers/SelectedPlayers.jsx";

const Player = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setselectedType] = useState("available");
  console.log(selectedType, "selectedType");
  const [selectedPlayers, setselectedPlayers] = useState([]);

  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between gap-4 items-center mb-[20px]">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Player ({selectedPlayers.length}/{Player.length})
          </h2>
        )}
        <div className="">
          <button
            onClick={() => setselectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-[10px]`}
          >
            Available
          </button>
          <button
            onClick={() => setselectedType("Selected (0)")}
            className={`btn ${selectedType === "Selected (0)" ? "bg-[#E7FE29]" : ""}  rounded-l-none rounded-r-[10px]`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setselectedPlayers={setselectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      ) : (
          <SelectedPlayers selectedPlayers={selectedPlayers} setselectedPlayers={ setselectedPlayers} />
      )}
    </div>
  );
};

export default Player;
