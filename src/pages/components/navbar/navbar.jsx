import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const LINK = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Fixtures",
      link: "/fixtures",
    },
    {
      title: "Transfer",
      link: "/transfer",
    },
    {
      title: "Standing",
      link: "/standing",
    },
    {
      title: "Explore",
    },
  ];

  const subMenu = [
    {
      title: "Club",
    },
    {
      title: "Player",
    },
    {
      title: "Coach",
    },
  ];

  const [exploreDrop, setExploreDrop] = useState(false);

  return (
    <div className="flex w-full justify-center gap-16 bg-secondary py-3">
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
                <div className="absolute bg-secondary translate-y-16 py-2 px-14 shadow-md">
                  {subMenu.map((item) => (
                    <p key={item.title} className="nav-link py-[2px]">
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
