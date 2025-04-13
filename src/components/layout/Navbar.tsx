export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5 justify-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/matchups">Matchups</a>
        </li>
        <li>
          <a href="/players">Players</a>
        </li>
        <li>
          <a href="/standings">Standings</a>
        </li>
        <li>
          <a href="/team">Team</a>
        </li>
      </ul>
    </nav>
  );
}
