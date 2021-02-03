import * as React from 'react'
import { User } from '../../state/types/User'
import { currencyFormatterSymbol } from '../../util'
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
            const base$ = container$.current
            const child$ = base$.firstChild as HTMLDivElement
            if (base$.clientWidth === child$.clientWidth && base$.clientHeight === child$.clientHeight) return
            child$.style.width = `${base$.clientWidth}px`
            child$.style.height = `${base$.clientHeight}px`
        }
        onResize()
        addEventListener('resize', onResize)
        return () => removeEventListener('resize', onResize)
    }, [container$.current])

    return (
        <div ref={container$} className='user-list'>
            <div className='user-list--scroll'>
                <div className='user-list--items'>
                    {props.users.map((user, i) => (
                        <Item key={user.username} index={i + 1} user={user} onClick={props.onClick} />
                    ))}
                </div>
            </div>
        </div>
    )
}

/**
 * Renders a single user of the users list.
 *
 * @param props.index user index
 * @param props.user user object
 * @param props.onClick optional callback that is triggered when this component is clicked
 */
const Item = (props: { index: number; user: User; onClick?: (user: User) => void }) => (
    <div
        className='user-list--item'
        style={{ cursor: props.onClick != undefined ? 'pointer' : '' }}
        onClick={event => props.onClick?.(props.user)}
    >
        <span style={{ width: '3em' }}>{props.index}</span>
        <span style={{ flex: 1 }}>{props.user.name}</span>
        <span style={{ fontSize: '1.25em' }}>{currencyFormatterSymbol.format(props.user.totalSales)}</span>
    </div>
)
