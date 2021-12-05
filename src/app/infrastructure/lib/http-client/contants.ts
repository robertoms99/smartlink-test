const RESPONSES_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
  UNAUTHORIZED: 401
}

const ERROR_RESPONSES = [
  RESPONSES_CODES.NOT_FOUND,
  RESPONSES_CODES.INTERNAL_ERROR,
  RESPONSES_CODES.UNAUTHORIZED,
  RESPONSES_CODES.BAD_REQUEST
]

export { RESPONSES_CODES, ERROR_RESPONSES }
