import * as React from 'react'
import { useSelection } from '../../state/Store'
import { currencyFormatterSymbol, dateFormatter } from '../../util'
import './UserDetail.css'

export const UserDetail = () => {
    const tableContainer$ = React.useRef<HTMLDivElement>()
    const { selectedUser } = useSelection(state => ({ selectedUser: state.user.selectedUser }))
    if (selectedUser == undefined) throw new Error('no user is selected in the user reducer')

    React.useLayoutEffect(() => {
        const onResize = () => {
            const base$ = tableContainer$.current
            const child$ = base$.firstChild as HTMLDivElement
            if (base$.clientWidth === child$.clientWidth && base$.clientHeight === child$.clientHeight) return
            child$.style.width = `${base$.clientWidth}px`
            child$.style.height = `${base$.clientHeight}px`
        }
        onResize()
        addEventListener('resize', onResize)
        return () => removeEventListener('resize', onResize)
    }, [tableContainer$.current])

    return (
        <div className='user-detail'>
            <span>{`Name: ${selectedUser.name}`}</span>
            <span>{`User Name: ${selectedUser.username}`}</span>
            <span>{`Phone: ${selectedUser.phone}`}</span>
            <span>{`Total Sales: ${currencyFormatterSymbol.format(selectedUser.totalSales)}`}</span>
            <span className='user-detail--sales'>{'Sales'}</span>
            <div ref={tableContainer$} style={{ flex: 1 }}>
                <div className='user-detail--scroll'>
                    <table className='user-detail--table'>
                        <thead>
                            <tr>
                                <th>{'Product'}</th>
                                <th>{'Volume'}</th>
                                <th>{'Unit Value'}</th>
                                <th>{'Date'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedUser.sales.map((sale, i) => (
                                <tr key={i}>
                                    <td>{sale.product}</td>
                                    <td>{sale.volume}</td>
                                    <td>{currencyFormatterSymbol.format(sale.unitPrice)}</td>
                                    <td>{dateFormatter.format(sale.date)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
