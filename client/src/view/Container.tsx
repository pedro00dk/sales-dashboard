import * as React from 'react'
import { actions, DefaultStore, useDispatch, useSelection } from '../state/Store'
import './Container.css'
import { HomeMenu } from './menu/HomeMenu'
import { UserDetail } from './menu/UserDetail'
import { UsersMenu } from './menu/UsersMenu'
import { MenuBar } from './MenuBar'

export const Container = () => (
    <DefaultStore>
        <Content></Content>
    </DefaultStore>
)

export const menus = { HOME: HomeMenu, 'USER LIST': UsersMenu, 'USER DETAIL': UserDetail }
const menuBarNames = ['HOME', 'USER LIST']

export const Content = () => {
    const dispatch = useDispatch()
    const { menu } = useSelection(state => ({ menu: state.menu }))

    if (menu.length === 0) dispatch(actions.menu.push(menuBarNames[0]))
    const menuName = menu.length !== 0 ? menu[menu.length - 1].name : ''
    const Component = menu.length !== 0 ? menus[menu[menu.length - 1].name] : HomeMenu
    const componentData = menu.length !== 0 ? menu[menu.length - 1].data : undefined

    React.useEffect(() => {
        dispatch(actions.menu.set(menuBarNames[0]))
    }, [])

    return (
        <div className='container'>
            <Header />
            <div className='container-content'>
                <MenuBar menus={menuBarNames} selected={menuName} />
                <Component />
            </div>
            <Footer />
        </div>
    )
}

const Header = () => <div className='container-header'>{'HEADER'}</div>

const Footer = () => <div className='container-footer'>{'FOOTER'}</div>
