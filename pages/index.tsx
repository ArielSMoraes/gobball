import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import httpService from '../src/service/httpService';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState<User>({
    name: '',
    password: ''
  })
  const router = useRouter()
  
  const handleUpdateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = () => {
    httpService.login(user)
      .then(() => router.push('protected-page'))
      .catch((e) => alert(e))
  }

  return (
    <div className={styles.container}>
      <CssBaseline />
      <Head>
        <title>The Gobball Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          The Gobball Recipes
        </h1>
        <h2>
          Login
        </h2>

        <form>
          <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            <TextField
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              onChange={handleUpdateUser}
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              onChange={handleUpdateUser}
            />
            <Button variant="contained" onClick={handleLogin}>Login</Button>
          </Box>
        </form>
      </main>
    </div>
  );
}
