import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('api/users/signup', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid!'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Passward must be between 4 and 20 characters!') 
],
(req: Request, res: Response) => {
  const { email, passward } = req.body;

  //add validation
  if (!email ||typeof email != 'string') {
    res.status(400).send('Provide a valid email!!');
  }
  // new User({ email, passward })
});

export { router as signupRouter };