import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Krisullis</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Krisullis
        </h1>
      
        

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Welcome &rarr;</h3>
            <p>Here's where your Fun and Learning Adventure Begins ...</p>
          </a>

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
