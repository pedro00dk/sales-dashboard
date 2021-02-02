import * as React from 'react'
import './Container.css'
import { Footer } from './Footer'
import { Header } from './Header'
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
