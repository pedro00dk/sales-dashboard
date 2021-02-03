export const currencyFormatterSymbol = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
})
export const currencyFormatterCode = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'code',
})
export const numberFormatterComma = new Intl.NumberFormat('en')
export const dateFormatter = new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', year: 'numeric' })
