/**
 * Manage user fetching and selection.
 */

import { User } from './types/User'

const users: User[] = [
    {
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
                unitValue: 123123125.45,
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

const x = users.reduce((acc, next, i) => {
    acc[next.username + i.toString()] = next
    return acc
}, {} as { [username: string]: User })

type State = { users: { [username: string]: User }; topSellers: User[]; selectedUser?: User }

type Action =
    | { type: 'user/fetch'; payload?: { user: User }; error?: Error } // TODO implement
    | { type: 'user/select'; payload: { user: User } }

const initialState: State = {
    users: x,
    topSellers: users.slice(0, 5),
    selectedUser: undefined,
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'user/select':
            return { ...state, selectedUser: action.payload.user }
        default:
            return state
    }
}

const select = (user: User): Action => ({ type: 'user/select', payload: { user } })

export const actions = { select }
