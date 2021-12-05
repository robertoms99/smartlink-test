const formatPrice = (price: number, currency: string = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency,
    maximumFractionDigits: 2
  })

  return formatter.format(price)
}

const getDateFromParam = (dateParam: string) => {
  const arrayString = []
  let index = 0
  const CHUNK_LENGTH = 2
  const MAX_LENGTH_DATE = 3

  while (true) {
    arrayString.push(dateParam.substr(index, CHUNK_LENGTH))
    index += CHUNK_LENGTH
    if (arrayString.length === MAX_LENGTH_DATE) break
  }

  arrayString.reverse()

  return `20${arrayString.join('-')}`
}

export { formatPrice, getDateFromParam }
