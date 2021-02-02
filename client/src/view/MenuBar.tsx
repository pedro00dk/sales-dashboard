import * as React from 'react'
import './MenuBar.css'

export const MenuBar = (props: { menus: string[]; selected: string; onClick: (menu: string) => void }) => {
    return (
        <div className='menu-bar'>
            {props.menus.map(name => (
                <Item key={name} name={name} selected={name === props.selected} onClick={props.onClick} />
            ))}
        </div>
    )
}

const Item = (props: { name: string; selected: boolean; onClick: (menu: string) => void }) => (
    <div
        className={`menu-bar-item ${props.selected ? 'menu-bar-item-selected' : ''}`}
        onClick={event => props.onClick(props.name)}
    >
        {props.name}
    </div>
)
