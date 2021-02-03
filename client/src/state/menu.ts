/**
 * Manage stacked menu switching.
 */

type State = { name: string; data: any }[]

type Action =
    | { type: 'menu/set'; payload: { name: string; data: any } }
    | { type: 'menu/push'; payload: { name: string; data: any } }
    | { type: 'menu/pop' }

const initialState: State = []

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'menu/set':
            return [action.payload]
        case 'menu/push':
            return [...state, action.payload]
        case 'menu/pop':
            return state.slice(0, -1)
        default:
            return state
    }
}

const set = (name: string, data: any): Action => ({ type: 'menu/set', payload: { name, data } })

const push = (name: string, data: any): Action => ({ type: 'menu/push', payload: { name, data } })

const pop = (): Action => ({ type: 'menu/pop' })

export const actions = { set, push, pop }
