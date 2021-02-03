import * as React from 'react'
import './Container.css'
import { HomeMenu } from './menu/HomeMenu'
import { UserDetail } from './menu/UserDetail'
import { UsersMenu } from './menu/UsersMenu'
import { MenuBar } from './MenuBar'

const menuComponents = { HOME: HomeMenu, 'USER LIST': UsersMenu }
const menuNames = Object.keys(menuComponents)

export const Container = () => {
    const [selectedMenu, setSelectedMenu] = React.useState(menuNames[0])
    const MenuComponent = menuComponents[selectedMenu]

    return (
        <div className='container'>
            <Header />
            <div className='container-content'>
                <MenuBar menus={menuNames} selected={selectedMenu} onClick={setSelectedMenu} />
                {/* <MenuComponent /> */}
                <UserDetail />
            </div>
            <Footer />
        </div>
    )
}

const Header = () => <div className='container-header'>{'HEADER'}</div>

const Footer = () => <div className='container-footer'>{'FOOTER'}</div>
