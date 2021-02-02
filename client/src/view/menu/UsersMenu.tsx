import * as React from 'react'
import { User } from '../../User'
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
]

export const UsersMenu = () => (
    <div className='users-menu'>
        <UserList users={users} onClick={username => console.log(username)} />
    </div>
)
