import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setselectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("Not enough coin to purchase this player");
      return;
    }
    alert(`${player.name} is selected`);
    setIsSelected(true);
    setselectedPlayers([...selectedPlayers, player])
   
  };
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={player.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUserAlt />
          {player.name}
        </h2>
        <div className="flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center">
            <FaFlag />
            <p>{player.country}</p>
          </div>
          <button className="btn ">{player.role}</button>
        </div>
        <div className="divider"></div>
        <h2 className="font-bold">({player.rating})</h2>
        <div className="flex justify-between  font-bold">
          <p>{player.batting_style}</p>
          <p className="text-right">{player.bowling_style}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.price}</p>
          <button
            className="btn "
            onClick={handleChoosePlayer}
            disabled={isSelected ? true : false}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
