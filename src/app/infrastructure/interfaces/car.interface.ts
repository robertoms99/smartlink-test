export default interface ICar {
  imageUrl: string
  companyImageUrl: string
  category: string
  model: string
  passengers: number
  doors: number
  carBaggage: any[]
  dailyRateCurrency: string
  dailyRate: number
  totalRateCurrency: string
  totalRate: number
}
