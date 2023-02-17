import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const LINK = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Trending",
      link: "/trending",
    },
    {
      title: "Movies",
      link: "/movies",
    },
    {
      title: "TV Show",
    },
    {
      title: "Explore",
    },
  ];

  const subMenu = [
    {
      title: "Most popular movies",
    },
    {
      title: "Most popular kid movies",
    },
    {
      title: "In theatres",
    },
  ];

  const [exploreDrop, setExploreDrop] = useState(false);

  return (
    <div className="flex w-full justify-center gap-16 py-3">
      {LINK.map((item) => (
        <>
          {item.title === "Explore" ? (
            <div className="flex items-center gap-1 cursor-pointer">
              <p
                onClick={() => setExploreDrop(!exploreDrop)}
                className="nav-link"
              >
                {item.title}
              </p>
              <Image
                src="/svg/chevron-down.svg"
                width={15}
                height={15}
                alt="dropdown"
              />
              {exploreDrop && (
                <div className="absolute bg-secondary translate-y-16 py-1 px-5 shadow-md rounded-md">
                  {subMenu.map((item) => (
                    <p key={item.title} className="nav-sub py-[2px]">
                      {item.title}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="nav-link">{item.title}</p>
          )}
        </>
      ))}
    </div>
  );
}
