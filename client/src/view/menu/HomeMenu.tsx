import * as React from 'react'
import { actions, useDispatch } from '../../state/Store'
import { User } from '../../state/types/User'
import { Card } from '../Card'
import { UserList } from '../user/UserList'
import './HomeMenu.css'

const users: User[] = [
    {
        name: 'Pedro',
        username: 'phsm',
        phone: '(81) 99508-8741',
        totalSales: 1234,
        sales: [],
    },
    {
        name: 'Guilherme',
        username: 'ghps',
        phone: '(81) 99999-9999',
        totalSales: 4321,
        sales: [],
    },
    {
        name: 'Pedro',
        username: 'phsm',
        phone: '(81) 99508-8741',
        totalSales: 1234,
        sales: [],
    },
    {
        name: 'Guilherme',
        username: 'ghps',
        phone: '(81) 99999-9999',
        totalSales: 4321,
        sales: [],
    },
    {
        name: 'Pedro',
        username: 'phsm',
        phone: '(81) 99508-8741',
        totalSales: 1234,
        sales: [],
    },
]

export const HomeMenu = () => {
    const dispatch = useDispatch()

    return (
        <div className='home-menu'>
            <div className='home-menu-users'>
                <UserList users={users} onClick={username => dispatch(actions.menu.set('USER DETAIL'))} />
            </div>
            <div className='home-menu-stats'>
                <Card title={'Total Sales'} content={'10000'} />
                <Card title={'Total Products'} content={'10000'} />
                <Card title={'Total Users asdf asdf asdf'} content={'10000'} />
            </div>
        </div>
    )
}
