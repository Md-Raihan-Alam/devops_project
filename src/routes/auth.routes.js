import { signup } from '#controllers/auth.controller.js';
import express from 'express';

const authRouter = express.Router();

authRouter.post('/sign-up', signup);

authRouter.post('/signin', (req, res) => {
  res.send('sign in');
});
authRouter.post('/signout', (req, res) => {
  res.send('signout');
});

export default authRouter;
