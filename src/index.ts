import 'tsconfig-paths/register'; // Add this line at the top
import { NODE_ENV } from '@utils/helpers/config';
import { connectToDatabase } from '@frameworks/mongoDB/db';
import { configServer } from '@frameworks/express/server';

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