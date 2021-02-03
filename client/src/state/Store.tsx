import * as React from 'react'

/**
 * Store implementation using flow principles for the React Hooks API.
 */
export type SubReducer = (state: any, action: { type?: string; payload?: any; error?: any }) => any
export type SubReducers = { [name: string]: SubReducer }
export type Reducer<T extends SubReducers> = (state: State<T>, action: Action<T>) => State<T>
export type State<T extends SubReducers> = { [name in keyof T]: Parameters<T[name]>[0] }
export type Action<T extends SubReducers> = { [name in keyof T]: Parameters<T[name]>[1] }[keyof T] | {}
export type GetState<T extends SubReducers> = () => State<T>
export type Dispatch<T extends SubReducers> = (action: Action<T> | AsyncAction<T>, call?: boolean) => Promise<void>
export type AsyncAction<T extends SubReducers> = (dispatch: Dispatch<T>, getState: GetState<T>) => Promise<void>
export type Store<T extends SubReducers> = {
    getState: GetState<T>
    dispatch: Dispatch<T>
    subscribe: (subscription: () => void) => () => void
}
export type Hooks<T extends SubReducers> = {
    useGetState: () => GetState<T>
    useDispatch: () => Dispatch<T>
    useSelection: <U>(query: (state: State<T>) => U) => U
}

/**
 * Combine an object containing SubReducers in a single reducer.
 * @param reducers object containing SubReducers
 */
const combineReducers = <T extends SubReducers>(reducers: T): Reducer<T> => (state, action) =>
    Object.fromEntries(Object.entries(reducers).map(([name, r]) => [name, r(state[name], action)])) as State<T>

/**
 * Create a store from the combined reducer and initializes the state.
 * @param reducer a combined reducer
 */
const createStore = <T extends SubReducers>(reducer: Reducer<T>): Store<T> => {
    let state = {} as State<T>
    const subscriptions = [] as (() => void)[]

    const getState = () => state

    const dispatch: Store<T>['dispatch'] = (action, call = true) => {
        if (typeof action === 'function') return action((a, c) => dispatch(a, call && c), getState)
        state = reducer(state, action)
        if (call) subscriptions.forEach(subscription => subscription())
    }

    const subscribe = (subscription: () => void) => {
        subscriptions.push(subscription)
        return () => {
            const index = subscriptions.indexOf(subscription)
            index >= 0 && subscriptions.splice(index, 1)
        }
    }

    dispatch({})
    return { getState, dispatch, subscribe }
}

/**
 * Wrap the Store in a new closure to provide hooks that can be used by react components.
 * @param store store to provide hooks
 */
const createHooks = <T extends SubReducers>(store: Store<T>): Hooks<T> => {
    const areSelectionsEqual = (selectionA: any, selectionB: any) => {
        if (Object.is(selectionA, selectionB)) return true
        if (typeof selectionA !== typeof selectionB) return false
        if (typeof selectionA !== 'object') return selectionA === selectionB
        const keysA = Object.keys(selectionA)
        const keysB = Object.keys(selectionB)
        const equalsKeyLength = keysA.length === keysB.length
        return equalsKeyLength && keysA.reduce((acc, key) => acc && selectionA[key] === selectionB[key], true)
    }

    const useGetState = () => store.getState

    const useDispatch = () => store.dispatch

    const useSelection = <U extends any>(query: (state: State<T>) => U) => {
        const memoQuery = React.useCallback(query, [])
        const [selection, setSelection] = React.useState(() => memoQuery(store.getState()))
        const selectionRef = React.useRef(selection)

        React.useEffect(() => {
            const checkSelectionUpdate = () => {
                const updatedSelection = memoQuery(store.getState())
                const isPromise = typeof (updatedSelection as any).then === 'function'
                const equals = isPromise || areSelectionsEqual(selectionRef.current, updatedSelection)
                if (!isPromise && !equals) setSelection((selectionRef.current = updatedSelection))
            }

            checkSelectionUpdate()
            const unsubscribe = store.subscribe(checkSelectionUpdate)
            return () => unsubscribe()
        }, [])

        return selection
    }

    return { useGetState, useDispatch, useSelection }
}

/**
 * Compose the functions to create reducers, store and hooks.
 * @param reducers object containing SubReducers
 */
const reducersToHooks = <T extends SubReducers>(reducers: T) => createHooks(createStore(combineReducers(reducers)))

/**
 * React tree wrapper that provides the hooks context.
 * It creates a store from received reducers and propagates the store hooks through the received react context.
 */
export const Store = <T extends SubReducers>(props: {
    reducers: T
    context: React.Context<Hooks<T>>
    children?: React.ReactNode
}) => <props.context.Provider value={reducersToHooks(props.reducers)}>{props.children}</props.context.Provider>
