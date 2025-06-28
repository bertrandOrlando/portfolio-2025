"use client";

// TODO: Extract Motion Link Stagger to a separate component
// TODO: Update transition for each character in Link Stagger

import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "motion/react";

export const Navbar = () => {
  const NavItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-between px-9 py-6">
      <h2 className="text-3xl font-semibold text-violet-700">BO</h2>
      <ul className="flex items-center gap-4">
        {NavItems.map((item) => (
          <motion.li
            initial="initial"
            whileHover="hovered"
            key={item.name}
            className="relative block overflow-hidden text-lg font-medium whitespace-nowrap"
          >
            <Link href={item.href}>
              <motion.div
                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              >
                {item.name}
              </motion.div>
              <motion.div
                className="absolute inset-0 text-violet-700 underline"
                variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              >
                {item.name}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
      <ul className="flex items-center gap-4">
        <motion.li
          initial="initial"
          whileHover="hovered"
          className="relative block overflow-hidden text-lg font-medium whitespace-nowrap"
        >
          <Link href="#googledrive" className="flex items-center">
            <motion.div
              className="flex items-center"
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            >
              My Resume {<CgArrowTopRight />}
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center text-violet-700 underline"
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            >
              My Resume {<CgArrowTopRight />}
            </motion.div>
          </Link>
        </motion.li>
        <li className="rounded-3xl border border-violet-700 px-4 py-1 text-lg font-medium text-black transition-colors duration-300 hover:bg-violet-600 hover:text-white">
          <Link href="mailto:bertrandorlando@gmail.com">Get in Touch</Link>
        </li>
      </ul>
    </nav>
  );
};
