import axios from "axios";
import { promises as fs } from "fs-extra";

export async function GET() {
  try {
    const response = await axios.get("https://api.sleeper.app/v1/players/nfl");
    const players = response.data;

    const filePath = "./public/players.json";
    await fs.writeFile(filePath, JSON.stringify(players, null, 2), "utf8");

    return new Response(`{"message": "Players saved successfully"}`, {
      status: 200,
      headers: { "Content-type": "application/json" },
    });
  } catch (error) {
    console.error("Error", error);
  }
}

