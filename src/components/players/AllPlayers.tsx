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
    "OG",
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
      <ul className="flex flex-col items-center bg-blue-500 space-y-2 p-3 min-h-screen">
        {activePlayers.map(([id, player]) => (
          <li
            className="flex flex-col items-center w-full max-w-sm bg-white rounded-lg shadow-md"
            key={id}>
            {/* Centered Image */}
            <img
              src={`https://sleepercdn.com/content/nfl/players/thumb/${id}.jpg`}
              width={64}
              height={64}
              className="rounded-full"
            />

            {/* Left-aligned Text */}
            <div className="flex flex-col justify-center items-center text-left">
              <p className="font-semibold text-lg">{player.full_name}</p>
              <p className="text-gray-600">{player.position}</p>
              <p className="text-gray-500">Team: {player.team}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
