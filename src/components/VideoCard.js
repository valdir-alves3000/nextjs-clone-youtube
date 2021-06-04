import {
  Avatar,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';

import days from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

days.extend(relativeTime);

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

function VideoCard({ item }) {
  const classes = useStyles();

  return (
    <Box >
      <img 
      className={classes.img}
      src={item.thumb} 
      alt={item.title} 
      />

      <Box display="flex" mt={1} >
        <Box mr={2}>
          <Avatar alt={item.authorName} src={item.authorAvatar}>
            V
          </Avatar>
        </Box>

        <Box>
          <Typography
          className={classes.caption}
          gutterBottom
          variant="body1"
          color="textPrimary"
          >
            {item.title}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {`${item.views} | ${days(item.updateAt).fromNow()}`}
          </Typography>
        </Box>

      </Box>
      </Box>
  );
}

export default VideoCard;