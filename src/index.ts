import { NODE_ENV } from '@config/index.js';
import { connectToDatabase } from 'db/db.js';
import { configServer } from 'server.js';

async function bootstrap() {
  await connectToDatabase();

  // Configure the server
  const app = configServer();

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} in ${NODE_ENV} mode`);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start the application:', err);
  process.exit(1);
});
