import React from "react";
import { Movies } from "../../components/movies";
import { TrendingHome } from "../../components/home";

export default function MoviesHome() {
  return (
    <div className="flex flex-col justify-center">
      <Movies />
      <TrendingHome />
    </div>
  );
}
