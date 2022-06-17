import styles from '../styles/Home.module.css';
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';





export default function VideoPlayer(){
  const [isPlaying, setIsPlaying] = useState(true);

  return (
     <div className={styles.playerwrapper}>
         <ReactPlayer url="https://vimeo.com/721178908" playing={ isPlaying } />
     </div>
  )
 }