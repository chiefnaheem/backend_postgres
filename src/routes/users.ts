import express from 'express'
import NextFunction from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: any, res: any) {
  res.send('respond with a resource');
});

export default router;
