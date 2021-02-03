/**
 * Manage user fetching and selection.
 */

import { User } from './types/User'

type State = { users: { [username: string]: User }; topSellers: User[]; selectedUser?: User }[]

type Action =
    | { type: 'user/fetch'; payload?: { user: User }; error?: Error } // TODO implement
    | { type: 'user/select'; payload: { user: User } }

const initialState: State = []

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
