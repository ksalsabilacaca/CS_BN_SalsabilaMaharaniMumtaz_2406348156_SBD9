"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between px-10 py-4
        bg-white shadow-sm
        transition-all duration-500 ease-in-out
        ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      {/* LOGO */}
      <h1 className="text-2xl font-bold">
        <span className="text-blue-600">tiket</span>
        <span className="text-yellow-400">.</span>
        <span className="text-blue-600">com</span>
      </h1>

      {/* MENU */}
      <div className="flex items-center gap-4">
        <button className="text-blue-600 font-medium hover:underline">
          Masuk
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Daftar
        </button>
      </div>
    </nav>
  );
}