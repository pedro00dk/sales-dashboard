import * as React from 'react'
import { User } from '../../state/types/User'
import './UserDetail.css'

const user: User = {
    name: 'Pedro',
    username: 'phsm',
    phone: '(81) 99508-8741',
    totalSales: 1234,
    sales: [
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
        {
            product: 'French Fries',
            date: new Date(),
            unitValue: 5.45,
            volume: 10000,
        },
    ],
}

export const UserDetail = () => {
    const tableContainer$ = React.useRef<HTMLDivElement>()

    React.useLayoutEffect(() => {
        const onResize = () => {
            const element$ = tableContainer$.current
            const parent$ = element$.parentElement
            if (element$.clientWidth === parent$.clientWidth && element$.clientHeight === parent$.clientHeight) return
            element$.style.width = `${parent$.clientWidth}px`
            element$.style.height = `${parent$.clientHeight}px`
        }
        onResize()
        addEventListener('resize', onResize)
        return () => removeEventListener('resize', onResize)
    }, [tableContainer$.current])

    return (
        <div className='user-detail'>
            <span>{`Name: ${user.name}`}</span>
            <span>{`User Name: ${user.username}`}</span>
            <span>{`Phone: ${user.phone}`}</span>
            <span>{`Sales: ${user.totalSales}`}</span>
            <span className='user-detail-sales'>{'Sales'}</span>
            <div style={{ flexGrow: 1 }}>
                <div ref={tableContainer$} style={{ position: 'absolute', overflowY: 'auto' }}>
                    <table className='user-detail-table'>
                        <thead>
                            <tr>
                                <th>{'Product'}</th>
                                <th>{'Volume'}</th>
                                <th>{'Unit Value'}</th>
                                <th>{'Date'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.sales.map(sale => (
                                <tr>
                                    <td>{sale.product}</td>
                                    <td>{sale.volume}</td>
                                    <td>{sale.unitValue}</td>
                                    <td>{sale.date.toString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
