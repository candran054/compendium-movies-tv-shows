import { Navbar } from "../components/navbar";
import MoviesHome from "./home/moviesHome";

export default function Home() {
  return (
    <div className="w-full justify-center h-screen bg-main">
      <Navbar />
      <MoviesHome />
    </div>
  );
}
