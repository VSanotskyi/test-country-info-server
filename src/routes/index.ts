import { Router, Request, Response, NextFunction } from 'express';

import { ApiError } from '../errors/api.error';
import { countryRoute } from './country.route';

const router = Router();

router.get('/countries', countryRoute.getAllCountry);

router.get('/country-info', countryRoute.countryInfo);

router.get('/country-population', countryRoute.countryPopulation);
router.post('/country-flag', countryRoute.countryFlag);

router.get('/error', (_req: Request, _res: Response, next: NextFunction) => {
  try {
    throw new Error('Error message');
  } catch (err) {
    next(ApiError.badRequest('Bad request'));
  }
});

export { router };
