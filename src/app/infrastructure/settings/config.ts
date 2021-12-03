const CREDENTIALS = {
  agencyId: 'DQgPjq82EpDunKRGv',
  agencyKey:
    'wnaurtm4FIGFV9QZ7hjTvkNfNRHKkE/w7XzbsL4sSMCdYuvVDT8JRJ3PArlbQJZpTFZIyg5oQmxUsujV0DS8TA==',
  clientId: 'https://test.destinojet.co'
}

const API_BASE = 'https://auth-testing.smartlinks.dev/api'

let REST_API_URL = {
  AUTHENTICATION: `auth/agency/token`,
  SEARCH_CAR: `cars/search`
}

type API_INTERFACE = typeof REST_API_URL & {
  [key: string]: string
}

REST_API_URL = new Proxy(REST_API_URL, {
  get(target: API_INTERFACE, key: string) {
    return `${API_BASE}/${target[key]}`
  }
})

export { CREDENTIALS, REST_API_URL }
