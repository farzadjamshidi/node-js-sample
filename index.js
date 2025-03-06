import express from 'express';
import shopRoutes from './shop/src/routes/routes.js';
import snRoutes from './social-network/src/routes/routes.js';
import swaggerRoutes from './shared/routes/swagger.routes.js';

const app = express();

app.use(express.json());

app.use("/api", swaggerRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/social-network', snRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
