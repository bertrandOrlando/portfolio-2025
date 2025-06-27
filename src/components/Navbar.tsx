import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const NavItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-between bg-slate-950 px-12 py-6 text-white">
      <h2 className="font-semibold text-violet-600">Bertrand Portfolio</h2>
      <ul className="flex items-center gap-4">
        {NavItems.map((item) => (
          <li
            key={item.name}
            className="transition-colors duration-300 hover:text-violet-500 hover:underline"
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}

        <li>
          <Link
            href="mailto:bertrandorlando@gmail.com"
            className="rounded-3xl border border-violet-600 px-4 py-1"
          >
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};
