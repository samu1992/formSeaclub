'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../page.module.css'
import Media from '@/app/components/SocialMedia'
import LoginForm from '@/app/components/Form2'
import Checkbox from '@/app/components/Check'

export default function Login (){


  return (
    <main className={styles.main}>
      <main className={styles.containerLogin}>
        <section className={styles.light}>
          <Image
            src='/Layer_2.svg'
            alt='logo'
            width={120}
            height={90}
          />
          <Link href='/'><button className={styles.lightButton}>Sign up</button></Link>
        </section>
        <div className={styles.text}>
          <h5 className={styles.h5}>Welcome back!</h5>
          <p className={styles.p}>Login with</p>
        </div>
        <section className={styles.terms}>
          <Checkbox/>
          <label>I have read and agree to the <span className={styles.span}>Terms & Conditions</span> and <span className={styles.span}>Privacy Policy.</span></label>
        </section>
        <Media />
        <section className={styles.containerOr}>
          <div className={styles.divOr} />
          <p className={styles.pOr}>or</p>
          <div className={styles.divOr} />
        </section>
        <LoginForm />
      </main>
    </main>
  )
}