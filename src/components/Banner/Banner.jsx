import React from 'react';

import styles from '../../styles/Home.module.css'

import bannerImg from '../../images/banner.jpg'

const Banner = () => (
    <section className={styles.banner}>
        <div className={styles.left}>
            <p className={styles.content}>
                23 FABRARY
                <span>SALE</span>
            </p>
            <button className={styles.more}>See more</button>
        </div>

        <div className={styles.right}
        style={{backgroundImage: `url(${bannerImg})`}}
        >
           <p className={styles.discount}>
                save up to <span>50%</span> off
            </p>
            
        </div>

    </section>
)
 
export default Banner;