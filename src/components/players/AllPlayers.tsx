"use client";

import { Player } from "@/types/Player";

export default function PlayerCard({
  players,
}: {
  players: Record<string, Player>;
}) {
  const excludedPositions = [
    "NT",
    "K",
    "DE",
    "SS",
    "FB",
    "LB",
    "C",
    "T",
    "ILB",
    "FS",
    "LS",
    "G",
    "CB",
    "P",
    "OL",
    "DT",
    "OT",
    "DL",
    "DB",
    'OG'
  ];
  const activePlayers = Object.entries(players).filter(
    ([id, player]) => 
      player.active &&
      !excludedPositions.includes(player.position) &&
      player.team !== null
  );
  console.log(activePlayers);
  return (
    <>
      <ul>
        {activePlayers.map(([id, player]) => [
          <li key={id}>
            <p>
              {player.position} {player.full_name} ID: {id}
            </p>
            <p>{player.team}</p>
            <p>{player.active}</p>
            <img
              src={`https://sleepercdn.com/content/nfl/players/thumb/${id}.jpg`}
              width={64}
            />
          </li>,
        ])}
      </ul>
    </>
  );
}
