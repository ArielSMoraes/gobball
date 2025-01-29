import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
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
            <TextField id="name" label="Name" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" type="password" />
          </Box>
        </form>
      </main>
    </div>
  );
}
