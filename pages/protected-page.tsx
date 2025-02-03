import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <CssBaseline />
      <Head>
        <title>Protected Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Protected Page
        </h1>
      </main>
    </div>
  );
}
