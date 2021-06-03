import nc from 'next-connect';
import connectToDatabase from '../../utils/mongodb';
import upload from '../../utils/upload';

const handler = nc()
  .use(upload.single('file'))
  .post(async (req, res) => {

    const {
      title,
      authorName,
      authorAvatar,
      videoUrl
    } = req.body;
    
    const { db } = await connectToDatabase();
    const collection = db.collection('videos');

    console.log(db);

    const video = await collection.insertOne({
      title,
      authorName,
      authorAvatar,
      views: 0,
      thumb: req.file.location,
      videoUrl,
      updatedAt: new Date(),
    });


    return res.status(200).json({ ok: true });
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;