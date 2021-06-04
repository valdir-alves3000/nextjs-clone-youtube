import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography,
} from '@material-ui/core';

import {
  AccountCircle,
  History,
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
} from '@material-ui/icons';

import { signIn, signOut, useSession } from 'next-auth/client';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },

  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px',
    borderRight: 'none',
  },

  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },

  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },

  listItemText: {
    fontSize: 14,
  },

}))

const primaryMenu = [
  {
    id: 1,
    label: 'Início',
    path: '/',
    icon: Home,
  },

  {
    id: 2,
    label: 'Em alta',
    path: '/trendding',
    icon: Whatshot,
  },

  {
    id: 3,
    label: 'Inscrições',
    path: '/subscriptions',
    icon: Subscriptions,
  },
];

const secondaryMenu = [
  {
    id: 1,
    label: 'Biblioteca',
    icon: VideoLibrary,
  },

  {
    id: 2,
    label: 'Histórico',
    icon: History,
  },
];

function NavBar() {
  const router = useRouter();
  const classes = useStyles();
  const [session] = useSession();
  
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Canal 1' },
    { id: 2, name: 'Canal 2' },
    { id: 3, name: 'Canal 3' },
    { id: 4, name: 'Canal 4' },
    { id: 5, name: 'Canal 5' },
    { id: 6, name: 'Canal 6' },
    { id: 7, name: 'Canal 7' },
    { id: 8, name: 'Canal 8' },
    { id: 9, name: 'Canal 9' },
    { id: 10, name: 'Canal 10' },
  ]);
  
  const isSelected = (item) => {
    return router.pathname === item.path;
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>

              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          )
        })}
      </List>
      <Divider />

      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>

              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          )
        })}
      </List>
      <Divider />

      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>

        <Box mt={2}>
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
           <List
           subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Inscrições
            </ListSubheader>
           }
           >
             {subscriptions.map((item) => (
               <ListItem
               key={item.id}
               button
               classes={{ root: classes.listItem }}
               selected={isSelected(item)}
               >
                 <ListItemIcon>
                   <Avatar className={classes.avatar}/>
                 </ListItemIcon>
                 <ListItemText
                 classes={{
                   primary: classes.listItemText,
                 }}
                 primary={item.name}
                 />
               </ListItem>
             ))}
           </List>
           
          )}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  )
}

export default NavBar;