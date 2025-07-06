"use client";

// TODO: Extract Motion Link Stagger to a separate component
// TODO: Update transition for each character in Link Stagger

import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "motion/react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const NavItems = [
    // { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    // { name: "Experience", href: "#work" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between py-6">
      <h2 className="text-3xl font-semibold text-violet-700">BO</h2>
      <ul className="hidden items-center gap-4 lg:flex">
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
      <div className="flex items-center">
        <ul className="flex items-center lg:gap-x-4">
          <motion.li
            initial="initial"
            whileHover="hovered"
            className="relative hidden overflow-hidden text-lg font-medium whitespace-nowrap lg:block"
          >
            <Link
              href="https://drive.google.com/drive/folders/1PtAYP37Iqb9-gKKOR0iPuANldejSgj56?usp=sharing"
              target="_blank"
              className="flex items-center"
            >
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
          <li className="rounded-3xl border border-violet-700 px-4 py-1 text-base font-medium text-black transition-colors duration-300 hover:bg-violet-600 hover:text-white md:text-lg">
            <Link href="mailto:bertrandorlando@gmail.com">Get in Touch</Link>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-8 w-8 flex-col items-center justify-center ring-0 outline-0 lg:hidden"
        >
          <div
            className={`h-0.5 w-6 rounded-sm bg-black transition duration-300 ease-out ${
              isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
            }`}
          ></div>
          <div
            className={`my-0.5 h-0.5 w-6 rounded-sm bg-black transition duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`h-0.5 w-6 rounded-sm bg-black transition duration-300 ease-out ${
              isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
            }`}
          ></div>
        </button>
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="absolute top-16 right-0 z-10 flex w-full flex-col items-center gap-4 bg-white p-6 shadow-lg lg:hidden"
      >
        {NavItems.map((item) => (
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * NavItems.indexOf(item) }}
            key={item.name}
            className="text-lg font-medium"
          >
            <Link href={item.href}>{item.name}</Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * NavItems.length }}
          className="text-lg font-medium"
        >
          <Link
            href="https://drive.google.com/drive/folders/1PtAYP37Iqb9-gKKOR0iPuANldejSgj56?usp=sharing"
            target="_blank"
            className="flex items-center underline"
          >
            My Resume {<CgArrowTopRight />}
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};
