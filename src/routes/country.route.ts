import { NextFunction, Request, Response } from 'express';

import { ctrlWrapper } from '../controllers/ctrl.wrapper';
import { config } from '../config/config';
import { countryEndPoint } from '../constants/urls';
import { ApiError } from '../errors/api.error';

const getAllCountry = async (_: Request, res: Response) => {
  const response = await fetch(
    `${config.BASE_API_URL}/${countryEndPoint.getAllCountry}`,
  );

  const data = await response.json();

  res.status(200).json(data);
};

const countryInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { country } = req.query;

  if (!country) {
    next(ApiError.badRequest('Bad request'));
  }

  const response = await fetch(
    `${config.BASE_API_URL}/${countryEndPoint.CountryInfo(country.toString())}`,
  );

  const data = await response.json();

  res.status(200).json(data);
};

const countryPopulation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { country } = req.query;

  const response = await fetch(
    `${config.CITIES_API}/${countryEndPoint.population}`,
  );

  const { data } = await response.json();

  const filterData = data.find((item) => item.country === country);

  res.status(200).json(filterData);
};

const countryFlag = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      iso2: body.iso2,
    }),
  };

  const response = await fetch(
    `${config.CITIES_API}/${countryEndPoint.flag}`,
    options,
  );

  const { data } = await response.json();

  res.status(200).json(data);
};

export const countryRoute = {
  getAllCountry: ctrlWrapper(getAllCountry),
  countryInfo: ctrlWrapper(countryInfo),
  countryPopulation: ctrlWrapper(countryPopulation),
  countryFlag: ctrlWrapper(countryFlag),
};
