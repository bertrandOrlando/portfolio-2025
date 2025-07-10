"use client";

import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const submitMessageHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageData = {
      name: name,
      email: email,
      message: message,
    };

    setIsSending(true);
    await fetch("https://formspree.io/f/meokyazk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    setTimeout(async () => {
      setIsSending(false);
      toast("Thank you for your message. I'll get back to you soon.");
    }, 1000);
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-y-4 py-20">
      <h2 id="contact" className="text-2xl font-semibold md:text-3xl">
        Get in <span className="text-violet-700">Touch</span>
      </h2>
      <p className="max-w-2xl text-center">
        Have a project in mind or want to collaborate? Feel free to reach out.{" "}
        {`I'm`} always open to discussing new opportunities.
      </p>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:p-8">
        <div className="grid grid-cols-1 items-center">
          <h4 className="text-center text-xl font-semibold">
            Contact Information
          </h4>
          <div className="grid grid-cols-1 gap-y-1 lg:p-8">
            <div className="flex w-full items-center gap-x-4">
              <MdMarkEmailRead
                size={36}
                className="rounded-full bg-violet-200 p-2"
              />
              <div>
                <p className="font-medium">Email</p>
                <Link
                  href={`mailto:bertrandorlando@gmail.com`}
                  className="cursor-pointer text-xs transition-colors hover:text-violet-700 md:text-sm lg:text-base"
                >
                  bertrandorlando@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex w-full items-center gap-x-4">
              <BiPhoneCall
                size={36}
                className="rounded-full bg-violet-200 p-2"
              />
              <div>
                <p className="font-medium">Phone Number</p>
                <Link
                  href={`tel:+6281282004160`}
                  className="cursor-pointer text-xs transition-colors hover:text-violet-700 md:text-sm lg:text-base"
                >
                  +62 812-8200-4160
                </Link>
              </div>
            </div>
            <div className="flex w-full items-center gap-x-4">
              <CiLocationOn
                size={36}
                className="rounded-full bg-violet-200 p-2"
              />
              <div>
                <p className="font-medium">Location</p>
                <Link
                  href={`https://g.co/kgs/sEbLgbf`}
                  className="cursor-pointer text-xs transition-colors hover:text-violet-700 md:text-sm lg:text-base"
                  target="_blank"
                >
                  Bandung, Indonesia
                </Link>
              </div>
            </div>
          </div>
          <div>
            <p className="my-4 text-center text-lg">Connect With Me</p>
            <div className="flex justify-center gap-x-3">
              <Link
                href={`https://www.linkedin.com/in/bertrandorlando/`}
                className="cursor-pointer"
                target="_blank"
              >
                <FaLinkedinIn
                  size={24}
                  className="transition hover:scale-125 hover:text-blue-600"
                />
              </Link>
              <Link
                href={`https://github.com/bertrandOrlando`}
                className="cursor-pointer"
                target="_blank"
              >
                <FaGithub
                  size={24}
                  className="transition hover:scale-125 hover:text-slate-800"
                />
              </Link>
              <Link
                href={`https://www.instagram.com/bertrand.78/`}
                className="cursor-pointer"
                target="_blank"
              >
                <FaInstagram
                  size={24}
                  className="transition hover:scale-125 hover:text-pink-600"
                />
              </Link>
            </div>
          </div>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-300 bg-white p-8"
          onSubmit={(e) => submitMessageHandler(e)}
        >
          <h4 className="text-xl font-semibold">Send A Message</h4>
          <label htmlFor="name" className="block text-center font-medium">
            Your Name<span className="text-sm text-red-600">*</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md bg-slate-200 px-4 py-2 text-sm"
              required
            />
          </label>
          <label htmlFor="email" className="block text-center font-medium">
            Your Email<span className="text-sm text-red-600">*</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-slate-200 px-4 py-2 text-sm"
              required
            />
          </label>
          <label htmlFor="message" className="block text-center font-medium">
            Your Message<span className="text-sm text-red-600">*</span>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md bg-slate-200 px-4 py-2 text-sm"
              rows={5}
              required
            />
          </label>
          <button className="flex cursor-pointer items-center justify-center gap-x-2 rounded-3xl border border-violet-600 bg-violet-600 px-4 py-2 text-white transition hover:scale-105 hover:bg-transparent hover:text-black">
            {!isSending ? `Send Message` : `Sending...`} <IoPaperPlaneOutline />
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};
