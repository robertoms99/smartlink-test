import { ERROR_RESPONSES, RESPONSES_CODES } from './contants'
import ResponseError from './ResponseError'

const httpClient = () => {}

httpClient.get = async (url: string, headers?: Headers) => await requester(url, { headers })

httpClient.post = async (url: string, body: any, authorization: string = '') =>
  await requester(url, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization
    },
    method: 'POST'
  })

const requester = async (resource: string | Request, init?: RequestInit) => {
  const response = await window.fetch(resource, init)

  const body: {
    data: any
    error: any
    status: number
  } = {
    data: null,
    error: null,
    status: response.status
  }

  try {
    const data = await response.json()
    body.data = data
    if (ERROR_RESPONSES.includes(response.status)) throw new ResponseError(body)
  } catch (error: any) {
    error.error = error
    if (!(error instanceof ResponseError)) body.status = RESPONSES_CODES.INTERNAL_ERROR
    throw error
  }

  return body
}

export default httpClient
