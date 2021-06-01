import React from 'react';
import { Box, Grid } from '@material-ui/core';

import Layout from '../components/Layout';
import VideoCard from '../components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4} >
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
              </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'video 1',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      views: 10,
      thumb: '/thumbs/game-over.jpg',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 2,
      title: 'video 2',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      views: 10,
      thumb: '/thumbs/image-blog.jpg',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 3,
      title: 'video 3',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      views: 10,
      thumb: '/thumbs/game-over.jpg',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    
    {
      id: 4,
      title: 'video 4',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      views: 10,
      thumb: '/thumbs/image-blog.jpg',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    
  ];

  return {
        props: {
        data: JSON.parse((JSON.stringify(data))),
    },
  }
}

export default Home;