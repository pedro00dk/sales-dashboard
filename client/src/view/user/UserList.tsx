import * as React from 'react'
import { User } from '../../User'
import './UserList.css'

export const UserList = (props: { users: User[]; onClick?: (username: string) => void }) => {
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

const Item = (props: { index: number; user: User; onClick?: (username: string) => void }) => (
    <div className='user-list-item' onClick={event => props.onClick?.(props.user.username)}>
        <span style={{ width: '3em' }}>{props.index}</span>
        <span style={{ flexGrow: 1 }}>{props.user.name}</span>
        <span>{props.user.totalSales}</span>
    </div>
)
