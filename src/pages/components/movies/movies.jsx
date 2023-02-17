import React, { useEffect, useState } from "react";

export default function Movies() {
  const DUMMY = [
    {
      label: "Banner1",
    },
    {
      label: "Banner2",
    },
    {
      label: "Banner3",
    },
    {
      label: "Banner4",
    },
  ];

  const axios = require("axios");
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const res = await axios.get(
        `https://imdb8.p.rapidapi.com/title/get-most-popular-movies`,
        {
          headers: {
            "X-RapidApi-Key": process.env.RAPID_API_KEY,
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
          params: {
            homeCountry: "US",
            purchaseCountry: "US",
            currentCountry: "US",
          },
        }
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full h-80 gap-2 justify-center items-center">
      {DUMMY.map((item) => (
        <div
          key={item.label}
          className="flex justify-center items-center w-[450px] h-[250px] bg-secondary rounded-md"
        >
          <h1 className="text-secondarys">{item.label}</h1>
        </div>
      ))}
    </div>
  );
}
