import ExperienceSection from "@/sections/ExperienceSection";
import HeroSection from "@/sections/HeroSection";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Akeem Allen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navigation}>
        <div className={styles.circle}></div>
      </nav>
      <HeroSection />
      <ExperienceSection />
      <section>
        <div></div>
      </section>
    </>
  );
}
