import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Kevin Shibuya',
    email: 'kevinshibuya@hotmail.com',
    password_hash: '9312738913812',
  });

  return res.json(user);
});

export default routes;
