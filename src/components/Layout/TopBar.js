import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Hidden,
  makeStyles,
  Paper,
  Toolbar,

} from '@material-ui/core';

import {
  Apps,
  AccountCircle,
  Menu,
  MoreVert,
  Search,
  VideoCall
} from '@material-ui/icons';

import { signIn, signOut, useSession } from 'next-auth/client';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer - 1,
    backgroundColor: theme.palette.background.default,
  },

  toolbar: {
    display: 'flex',
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },

  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },

  input: {
    flex: 1,
  }
}));

function TopBar() {
  const classes = useStyles();
  const [session] = useSession();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display='flex' alignItems='center'>
          <Menu />
          <img
            src="/icons/new-youtube-logo.png"
            alt="logo"
            className={classes.logo}
          />
        </Box>

        <Hidden mdDown>
          <Box display='flex' alignItems='center'>
            <Paper component='form' className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder='Pesquisar'
                inputProps={{ 'arial-label': 'search google maps' }}
              />
              <IconButton
                type='submit'
                arial-label='search'
              >
                <Search />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>

        <Box display='flex' alignItems='center'>
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>

          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>

          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          {!session ? (
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fazer Login
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                onClick={() => signOut()}
                alt="User"
                className={classes.avatar}
                src={session?.user?.image}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;