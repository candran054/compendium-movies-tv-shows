import React from "react";
import Movies from "../components/movies/movies";
import TrendingHome from "../components/home/trendingHome";

export default function MoviesHome() {
  return (
    <div className="flex flex-col justify-center">
      <Movies />
      <TrendingHome />
    </div>
  );
}
