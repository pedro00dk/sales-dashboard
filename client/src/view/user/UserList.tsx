import * as React from 'react'
import { User } from '../../state/types/User'
import './UserList.css'

/**
 * Render a list of users, displaying user names and total sales.
 *
 * @param props.users users to display in the received order, they must all be unique
 * @param props.onClick optional callback that is triggered when one of the users is clicked
 */
export const UserList = (props: { users: User[]; onClick?: (user: User) => void }) => {
    const container$ = React.useRef<HTMLDivElement>()

    React.useLayoutEffect(() => {
        const onResize = () => {
            const element$ = container$.current
            const parent$ = element$.parentElement
            if (element$.clientWidth === parent$.clientWidth && element$.clientHeight === parent$.clientHeight) return
            element$.style.width = `${parent$.clientWidth}px`
            element$.style.height = `${parent$.clientHeight}px`
        }
        onResize()
        addEventListener('resize', onResize)
        return () => removeEventListener('resize', onResize)
    }, [container$.current])

    return (
        <div ref={container$} className='user-list'>
            <div className='user-list-items'>
                {props.users.map((user, i) => (
                    <Item key={user.username} index={i + 1} user={user} onClick={props.onClick} />
                ))}
            </div>
        </div>
    )
}

/**
 * Renders a single user of the users list.
 * If `props.onClick` is provided, it changes the cursor type to pointer.
 *
 * @param props.index user index
 * @param props.user user object
 * @param props.onClick optional callback that is triggered when this component is clicked
 */
const Item = (props: { index: number; user: User; onClick?: (user: User) => void }) => (
    <div
        className={`user-list-item ${props.onClick != undefined ? 'user-list-item-clickable' : ''}`}
        onClick={event => props.onClick?.(props.user)}
    >
        <span style={{ height: 'fit-content', width: '3em' }}>{props.index}</span>
        <span style={{ height: 'fit-content', flexGrow: 1 }}>{props.user.name}</span>
        <span style={{ fontSize: '1.25em' }}>{props.user.totalSales}</span>
    </div>
)
