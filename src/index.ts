import 'tsconfig-paths/register'; // Add this line at the top
import { NODE_ENV } from '@config/index';
import { connectToDatabase } from 'db/db';
import { configServer } from 'server';

async function bootstrap() {
  await connectToDatabase();

  // Configure the server
  const app = configServer();

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} in ${NODE_ENV} mode`);
  });
  return app;
}

const app = bootstrap().catch((err) => {
  console.error('Failed to start the application:', err);
  process.exit(1);
});

export default app;