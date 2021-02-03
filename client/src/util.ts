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
