import styles from '../styles/Home.module.css';
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';


export default function VideoPlayer(){
  
  const [isPlaying, setIsPlaying] = useState(true);
  
    return (
     
       <main className={styles.mainabout}>
      <div className={styles.playerwrapper}>
        <ReactPlayer
          className={styles.reactplayer}
          url='https://vimeo.com/721178908'
          width='100%'
          height='100%'
          playing={ isPlaying }
        />
      </div>
   </main>
    )
  }



