import dotenv from 'dotenv';

dotenv.config();

const config = {
  APP_PORT: process.env.APP_PORT!,
  BASE_API_URL: process.env.BASE_API_URL,
  CITIES_API: process.env.CITIES_API,
};

export { config };
