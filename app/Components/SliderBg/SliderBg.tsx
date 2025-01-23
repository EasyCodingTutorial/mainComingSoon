
import React  from 'react'

import styles from './SliderBg.module.css'  
import Link from 'next/link'
 
 

export const SliderBg = () => {

   

  return (
    <div className={styles.SliderBg}>
      <div>
         <div className={styles.ImgContentBox}>
           <img src="/assets/MainBg.png" alt="" />
         </div>
         <div className={styles.Overlay}></div>
      </div>
        <div className={styles.MainContent}>
          <div>
            <h3>2025</h3>
          <h6>Easy Coding Tutorial</h6>
          <h5>Top 5 Coming Soon Pages..</h5> 
         <div className={styles.BtnBox}>
         <Link href={'https://www.youtube.com/@EasyCodingTutorial/videos'} target='_blank'>View Channel</Link>
         <Link href={'https://github.com/EasyCodingTutorial'} target='_blank'>Source Code</Link>
         </div>
          </div>
        </div>
       
    </div>
  )
}
