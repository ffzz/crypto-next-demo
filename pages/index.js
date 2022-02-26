import Head from "next/head";
import Image from "next/image";
import GetStartedBtn from "../components/GetStartedBtn";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Welcome to Crypto Playground!</h3>

        <p className={styles.description}>
          Click the Button below to get started!
        </p>

        {/* Click the button to generate a key pair */}
        <GetStartedBtn />
        {/* Input a message for signature */}
        {/* sign the message you typed in */}
        {/* verify the signature */}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
