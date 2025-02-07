import AllPlayers from "@/components/players/AllPlayers";
import { Player } from "@/types/Player";
import fs from "fs/promises";
import path from "path";

export default async function PlayersPage() {
  const filePath = path.join(process.cwd(), "public", "players.json");
  const fileInfo = await fs.readFile(filePath, "utf-8");
  const players: Record<string, Player> = JSON.parse(fileInfo);

  return (
    <div>
      <h1>Players</h1>
      <AllPlayers players={players} />
    </div>
  );
}
