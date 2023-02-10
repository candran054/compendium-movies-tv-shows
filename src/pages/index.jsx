import { Navbar } from "./components/navbar";
import League from "./league/leagueHome";

export default function Home() {
  return (
    <div className="bg-white w-full justify-center h-screen">
      <Navbar />
      <League />
    </div>
  );
}
