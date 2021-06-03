import connectToDatabase from '../utils/mongodb';

export default async function getVideos() {
  const { db } = await connectToDatabase();

  const data = await db
    .collection('videos')
    .find()
    .toArray();

  return data;
}