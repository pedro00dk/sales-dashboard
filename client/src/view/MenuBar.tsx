import * as React from 'react'
import { actions, useDispatch } from '../state/Store'
import './MenuBar.css'

/**
 * Lateral menu bar that display a list of menu names.
 *
 * @param props.menus menu names to be displayed
 * @param props.selected name of the selected menu
 */
export const MenuBar = (props: { menus: string[]; selected: string }) => {
    const dispatch = useDispatch()

    return (
        <div className='menu-bar'>
            {props.menus.map(menu => (
                <Item
                    key={menu}
                    menu={menu}
                    selected={menu === props.selected}
                    onClick={menu => dispatch(actions.menu.set(menu))}
                />
            ))}
        </div>
    )
}

const Item = (props: { menu: string; selected: boolean; onClick: (menu: string) => void }) => (
    <div
        className={`menu-bar-item ${props.selected ? 'menu-bar-item-selected' : ''}`}
        onClick={event => props.onClick(props.menu)}
    >
        {props.menu}
    </div>
)
