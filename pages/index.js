import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-7">
        <header>
          <p className="leading-tight">Abhishek Kalia</p>
          <p className="leading-tight opacity-60">Product Designer</p>
          <p className="leading-tight opacity-60">New York</p>
        </header>

        <div className="mt-10">
          <p>📱 Designer of usable interfaces.</p>
          <p>💻 Developer of full-stack applications.</p>
          <p>🧱 Maintainer of scalable design systems.</p>
          <div className="mt-3">
            <a className="text-blue-700">+ Read More</a>
          </div>
        </div>

        <div className="work mt-10">
          <p className="text uppercase text-sm font-bold">Select Work</p>
        </div>
      </main>
    </>
  );
}
