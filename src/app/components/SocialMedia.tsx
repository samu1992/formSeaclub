import React from "react";
import styles from '../page.module.css'
import Image from "next/image";

export default function Media (){

    return(
        <section className={styles.socialMedia}>
            <div className={styles.icon}><Image className={styles.image} src='/MetaMask_Fox 1.svg' alt='MetaMask_Fox 1' width={24} height={24}/></div>
            <div className={styles.icon}><Image className={styles.image} src='/WalletConnect.svg' alt='WalletConnect' width={24} height={24}/></div>
            <div className={styles.icon}><Image className={styles.image} src='/Google.svg' alt='Google' width={24} height={24}/></div>
            <div className={styles.icon}><Image className={styles.image} src='/Facebook.svg' alt='Facebook' width={24} height={24}/></div>
            <div className={styles.icon}><Image className={styles.image} src='/Vector.svg' alt='Vector' width={20} height={20}/></div>
        </section>
    )
}