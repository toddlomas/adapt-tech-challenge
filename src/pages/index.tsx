import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Todd&apos;s Data</title>
      </Head>
      <Navbar />
      <Homepage />
      {/* {users.length === 0 ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      )} */}
    </main>
  );
}
