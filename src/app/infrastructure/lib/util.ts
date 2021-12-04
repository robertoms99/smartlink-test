const formatPrice = (price: number, currency: string = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency,
    maximumFractionDigits: 2
  })

  return formatter.format(price)
}

export default formatPrice
