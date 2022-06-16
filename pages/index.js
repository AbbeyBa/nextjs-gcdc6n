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
          Krisullis <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/721178908?h=f76b8426ea&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Krisullis Butterflies"></iframe></div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        

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
