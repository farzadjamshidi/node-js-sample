import express from 'express';
import shopRoutes from './shop/src/routes/routes.js';

const app = express();

app.use('/api/shop', shopRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
