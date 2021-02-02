import * as React from 'react'
import './Container.css'
import { MenuBar } from './MenuBar'

export const Container = () => {
    const menus = ['HOME', 'USER LIST']
    const [selectedMenu, setSelectedMenu] = React.useState(menus[0])

    return (
        <div className='container'>
            <Header />
            <div className='container-content'>
                <MenuBar menus={menus} selected={selectedMenu} onClick={setSelectedMenu} />
            </div>
            <Footer />
        </div>
    )
}

const Header = () => <div className='container-header'>{'HEADER'}</div>

const Footer = () => <div className='container-footer'>{'FOOTER'}</div>
