import { Box, makeStyles } from '@material-ui/core';
import Head from 'next/head';

import TopBar from './TopBar';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',

  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

function Layout({ children, title }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="shortcut icon"
          href="https://www.youtube.com/s/desktop/a386e432/img/favicon.ico"
          type="image/x-icon" />
      </Head>

      <Box className={classes.root}>
        <TopBar />
        <NavBar />

        <Box className={classes.wrapper}>
          <Box className={classes.contentContainer}>
            <Box className={classes.content} >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Layout;