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
    unitValue: number
    date: Date
}
