/**
 * Contain general sales statistics.
 */

type State = { totalSold: number; totalProducts: number; totalUsers: number }

type Action = { type: 'stats/fetch'; payload: { name: string } } // TODO implement

const initialState: State = {
    totalSold: 17239,
    totalProducts: 43212,
    totalUsers: 61,
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {}
