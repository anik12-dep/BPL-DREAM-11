import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({player, handleDeleteSelectePlayer }) => {
  return (
    <div className="flex justify-between items-center gap-6 p-10 border rounded-2xl">
      <div className="flex items-center gap-6">
        <img
          src={player.image}
          alt={player.name}
          className="h-[75px] w-auto rounded-md"
        />
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <FaUser />
            {player.name}
          </h2>
          <p>{player.role}</p>
        </div>
      </div>
      <button
        className="btn text-red-500"
        onClick={() => handleDeleteSelectePlayer(player)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;
