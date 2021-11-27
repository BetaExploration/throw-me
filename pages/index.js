import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Input } from "@chakra-ui/react"
import Script from 'next/script'
import React from 'react'

export default function Home() {
  function registerUser(event){
    event.preventDefault() // don't redirect the page
    fetch("/api/create/"+event.target.name.value+"="+event.target.name.value)
    alert(0)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ThrowMeTo- A hassle free url shortner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/jQuery.js" />
      <Script src="/script.js" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Throw-Me-To
          <div style={{ fontSize: '1rem' }}>
            ( it&apos;s a url shortner )
          </div>
        </h1>
        <p className={styles.description}>
          don&apos;t worry we&apos;ll throw you well.
        </p>
        <form onSubmit={registerUser}>
          
        <div className={styles.input_cont}>
          <Input placeholder="my url name" style={{ width: '200px' }} required id="url" name="url" type="text" />
          <Input placeholder="enter your looong url" id="name" name="name" type="url" required/>
        </div>
        <div className={styles.button_doiIt}>
          <Button id="button" type="submit" colorScheme="teal" rightIcon={<ArrowForwardIcon />} style={{ margin: "5px" }}>
            Do It!
          </Button>
        </div>

        </form>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          (c) volcareso
        </span>
      </footer>
    </div>
  )
}
