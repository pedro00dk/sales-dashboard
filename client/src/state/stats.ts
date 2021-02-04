/**
 * Fetch general sales statistics.
 */

import { DefaultAsyncAction } from './Store'

type State = {
    fetching: boolean
    stats: {
        totalSales: number
        totalProducts: number
        totalUsers: number
    }
    error?: Error
}

type Action = { type: 'stats/fetch'; payload?: { stats: State['stats'] }; error?: Error }

const initialState: State = {
    fetching: false,
    stats: {
        totalSales: 0,
        totalProducts: 0,
        totalUsers: 0,
    },
    error: undefined,
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'stats/fetch':
            if (action.payload != undefined) return { ...state, fetching: false, stats: action.payload.stats }
            else if (action.error != undefined) return { ...state, fetching: false, error: action.error }
            else return { ...state, fetching: true }
        default:
            return state
    }
}

const fetchStats: () => DefaultAsyncAction = () => async dispatch => {
    dispatch({ type: 'stats/fetch' })
    try {
        const response = await fetch('http://localhost:8001/stats/')
        const stats: State['stats'] = await response.json()
        dispatch({ type: 'stats/fetch', payload: { stats } })
    } catch (error) {
        dispatch({ type: 'stats/fetch', error })
    }
}

export const actions = { fetchStats }
