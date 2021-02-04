/**
 * Manage user fetching and selection.
 */

import { DefaultAsyncAction } from './Store'
import { User } from './types/User'

type State = {
    fetching: boolean
    error?: Error
    users: User[]
    bestSellers: User[]
    selectedUser?: User
}

type Action =
    | { type: 'user/fetchBestSellers'; payload?: { bestSellers: User[] }; error?: Error }
    | { type: 'user/fetchUsers'; payload?: { users: User[] }; error?: Error }
    | { type: 'user/select'; payload: { user: User } }

const initialState: State = {
    fetching: false,
    error: undefined,
    users: [],
    bestSellers: [], //users.slice(0, 5),
    selectedUser: undefined,
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'user/fetchBestSellers':
            if (action.payload != undefined)
                return { ...state, fetching: false, bestSellers: action.payload.bestSellers }
            else if (action.error != undefined) return { ...state, fetching: false, error: action.error }
            else return { ...state, fetching: true }
        case 'user/fetchUsers':
            if (action.payload != undefined) return { ...state, fetching: false, users: action.payload.users }
            else if (action.error != undefined) return { ...state, fetching: false, error: action.error }
            else return { ...state, fetching: true }
        case 'user/select':
            return { ...state, selectedUser: action.payload.user }
        default:
            return state
    }
}

const fetchBestSellers: () => DefaultAsyncAction = () => async dispatch => {
    dispatch({ type: 'user/fetchBestSellers' })
    try {
        const response = await fetch('http://localhost:8001/best_sellers/')
        const bestSellers: User[] = await response.json()
        dispatch({ type: 'user/fetchBestSellers', payload: { bestSellers } })
    } catch (error) {
        dispatch({ type: 'user/fetchBestSellers', error })
    }
}

const fetchUsers: () => DefaultAsyncAction = () => async dispatch => {
    dispatch({ type: 'user/fetchUsers' })
    try {
        const response = await fetch('http://localhost:8001/users/')
        const users: User[] = await response.json()
        dispatch({ type: 'user/fetchUsers', payload: { users } })
    } catch (error) {
        dispatch({ type: 'user/fetchUsers', error })
    }
}

const select = (user: User): Action => ({ type: 'user/select', payload: { user } })

export const actions = { select, fetchBestSellers, fetchUsers }
