export type User = {
    username: string
    name: string
    phone: string
    totalSales: number
    sales: Sale[]
}

export type Sale = {
    product: string
    volume: number
    unitPrice: number
    date: Date
}
