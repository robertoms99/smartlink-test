export default class ResponseError extends Error {
  constructor(response: Response) {
    super(response.statusText)
  }
}
