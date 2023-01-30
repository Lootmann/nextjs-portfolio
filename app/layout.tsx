"use client";

import "../styles/globals.css";
import React from "react";
import Providers from "./Providers";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="w-screen h-screen flex justify-center bg-gray-900"
      suppressHydrationWarning
    >
      <head>
        <title>It's Me. Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased text-xl text-white flex flex-col mt-60">
        <div className="mx-auto mb-5">
          <h1 className="text-2xl underline underline-offset-2">
            It's Me, Portfolio.
          </h1>
        </div>

        <div className="flex border-2 border-slate-700 rounded-md">
          <aside className="w-[150px]">
            <header className="p-4 flex-auto min-w-0 flex flex-col justify-center items-center gap-5">
              <Link
                href="/"
                className="hover:bg-slate-700 px-2 rounded-md transition-all"
              >
                Home
              </Link>
              <Link
                href="/About"
                className="hover:bg-slate-700 px-2 rounded-md transition-all"
              >
                About
              </Link>
              <Link
                href="/Blog"
                className="hover:bg-slate-700 px-2 rounded-md transition-all"
              >
                Blog
              </Link>
              <Link
                href="/Contact"
                className="hover:bg-slate-700 px-2 rounded-md transition-all"
              >
                Contact
              </Link>
            </header>
          </aside>

          <Providers>
            <main className="w-[600px] flex flex-col items-center">
              {children}
            </main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
