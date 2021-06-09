import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from 'crypto';

const {
  MY_AWS_ACCESS_KEY,
  MY_AWS_SECRET_KEY,
  MY_AWS_REGION,
  MY_AWS_BUCKET
} = process.env;

aws.config.update({
  secretAccessKey: MY_AWS_SECRET_KEY,
  accessKeyId: MY_AWS_ACCESS_KEY,
  region: MY_AWS_REGION,
});

const s3 = new aws.S3({
  /* ... */
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: MY_AWS_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
});

export default upload;