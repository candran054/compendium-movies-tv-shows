import React from "react";

export default function TrendingHome() {
  const DUMMY = [
    {
      label: "Trending1",
    },
    {
      label: "Trending2",
    },
    {
      label: "Trending3",
    },
    {
      label: "Trending4",
    },
    {
      label: "Trending5",
    },
    {
      label: "Trending6",
    },
  ];

  return (
    <div className="flex w-full justify-center mt-10">
      <div className="flex items-center gap-10">
        <p className="font-semibold text-lg text-main">Trending</p>
        <div className="flex gap-10">
          {DUMMY.map((item) => (
            <div
              key={item.label}
              className="flex justify-center items-center w-60 h-32 bg-secondary rounded-md"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
