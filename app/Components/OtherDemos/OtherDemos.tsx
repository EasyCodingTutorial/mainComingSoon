import React from 'react'

import styles from './OtherDemos.module.css'
import Link from 'next/link'

import { StaticData } from '@/Data/staticData'


export const OtherDemos = () => {
  return (
    <div className={styles.OtherDemos}>
        <h6>Other Demo&apos;s</h6>
        
        <div className={styles.Row}>

{
    StaticData.map((I) =>(
            <div className={styles.Box} key={I.id}>
                 <img src={I.ImgUrl} alt="" />
                 <div className={styles.Content}>
                    <Link target='_blank' href={I.LiveLink}>View Demo</Link>
                    <Link target='_blank' href={I.SourceCode}>Source Code</Link>
                 </div>
            </div>
    ))
}


        </div>

    </div>
  )
}
