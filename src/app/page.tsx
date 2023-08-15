"use client"
import Image from 'next/image'
import { useState } from 'react'
import styles from './page.module.css'
import Form from './components/Form'
import Link from 'next/link'

export default function Home() {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(!checked)
  }
  return (
    <main className={styles.main}>
      <main className={styles.containerLogin}>
        <section className={styles.light}>
          <Image
          src='Layer_2.svg'
          alt='logo'
          width={120}
          height={90}
          />
          <Link href='/locations/login'><button className={styles.lightButton}>Login</button></Link>
          
        </section>
        <div className={styles.text}>
          <h5 className={styles.h5}>Welcome!</h5>
          <p className={styles.p}>How would you like to get started?</p>
        </div>
        <section className={styles.terms}>
        <div id='checkbox' className={styles.checkbox}></div>
        <label>I have read and agree to the <span className={styles.span}>Terms & Conditions</span> and <span className={styles.span}>Privacy Policy.</span></label>
        </section>
        <section className={styles.socialMedia}>
          <div className={styles.icon}><Image src='MetaMask_Fox 1.svg' alt='icon' width={24} height={24}/></div>
          <div className={styles.icon}><Image src='WalletConnect.svg' alt='icon' width={24} height={24}/></div>
          <div className={styles.icon}><Image src='Google.svg' alt='icon' width={24} height={24}/></div>
          <div className={styles.icon}><Image src='Facebook.svg' alt='icon' width={24} height={24}/></div>
          <div className={styles.icon}><Image src='Vector.svg' alt='icon' width={20} height={20}/></div>
        </section>
        <section className={styles.containerOr}>
        <div className={styles.divOr} />
        <p className={styles.pOr}>or</p>
        <div className={styles.divOr} />
        </section>
        <Form/>
      </main>
    </main>
  )
}
