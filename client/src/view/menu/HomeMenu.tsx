import * as React from 'react'
import { actions, useDispatch, useSelection } from '../../state/Store'
import { currencyFormatterCode, numberFormatterComma } from '../../util'
import { Card } from '../Card'
import { UserList } from '../user/UserList'
import './HomeMenu.css'

export const HomeMenu = () => {
    const dispatch = useDispatch()
    const { stats, user } = useSelection(state => ({ stats: state.stats, user: state.user }))

    React.useEffect(() => {
        dispatch(actions.user.fetchBestSellers())
        dispatch(actions.stats.fetchStats())
    }, [])

    return (
        <div className='home-menu'>
            <div className='home-menu-users'>
                <UserList
                    users={user.bestSellers}
                    onClick={user => {
                        dispatch(actions.user.select(user))
                        dispatch(actions.menu.set('USER DETAIL'))
                    }}
                />
            </div>
            <div className='home-menu-stats'>
                <Card title={'Total Sales'} content={currencyFormatterCode.format(stats.stats.totalSales)} />
                <Card title={'Total Products'} content={numberFormatterComma.format(stats.stats.totalProducts)} />
                <Card title={'Total Users'} content={numberFormatterComma.format(stats.stats.totalUsers)} />
            </div>
        </div>
    )
}
