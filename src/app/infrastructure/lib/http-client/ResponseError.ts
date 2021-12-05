export default class ResponseError extends Error {
  constructor(response: { data: any; error: any; status: number }) {
    super(response.data)
  }
}
