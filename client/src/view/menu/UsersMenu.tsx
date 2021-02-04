import * as React from 'react'
import { actions, useDispatch, useSelection } from '../../state/Store'
import { UserList } from '../user/UserList'

/**
 * List all users fetched by the user reducer. If one of the users is selected, the user detail menu is displayed with
 * selected user info.
 */
export const UsersMenu = () => {
    const dispatch = useDispatch()
    const { user } = useSelection(state => ({ user: state.user }))

    React.useEffect(() => {
        dispatch(actions.user.fetchUsers())
    }, [])

    return (
        <UserList
            users={Object.values(user.users)}
            onClick={user => {
                dispatch(actions.user.select(user))
                dispatch(actions.menu.set('USER DETAIL'))
            }}
        />
    )
}
