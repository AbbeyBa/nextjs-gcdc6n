import styles from '../styles/Home.module.css';
import ReactPlayer from 'react-player/lazy';
import { useState, useEffect } from 'react';
import React from 'react';


export default function about(){
  
  const [isPlaying] = useState(true);
  
    return (
      <body className={styles.mainabout}> 
       
      <div className={styles.playerwrapper}>
        <ReactPlayer
          className={styles.reactplayer}
          url='https://vimeo.com/721178908'
          width='100%'
          height='100%' 
          playing={ isPlaying }
        />
      </div>
      <div className={styles.grid}>
      <p classname={styles.code}>Get in Touch With Us </p>
      </div>
   </body>

          
    )
    
  }
  



