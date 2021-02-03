import * as React from 'react'
import { actions, useDispatch } from '../../state/Store'
import { User } from '../../state/types/User'
import { UserList } from '../user/UserList'
import './UsersMenu.css'

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
    {
        name: 'Guilherme',
        username: 'ghps',
        phone: '(81) 99999-9999',
        totalSales: 4321,
        sales: [],
    },
]

export const UsersMenu = (props: { setMenu: (menu: (...args: any[]) => JSX.Element) => void }) => {
    const dispatch = useDispatch()
    return (
        <div className='users-menu'>
            <UserList users={users} onClick={username => dispatch(actions.menu.set('USER DETAIL'))} />
        </div>
    )
}
