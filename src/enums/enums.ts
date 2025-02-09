export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,

  INTERNAL_SERVER_ERROR = 500,
}

export enum MessageEnum {
  BAD_REQUEST = 'Invalid request.',
  NOT_FOUND = 'Resource not found.',
  INTERNAL_SERVER_ERROR = 'Internal server error.',
}
