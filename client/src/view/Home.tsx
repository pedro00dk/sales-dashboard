import * as React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './Home.css'
import { MenuBar } from './MenuBar'

export const Home = () => {
    const menus = ['HOME', 'USER LIST']
    const [selectedMenu, setSelectedMenu] = React.useState(menus[0])

    return (
        <div className='home'>
            <Header />
            <div className='home-content'>
                <MenuBar menus={menus} selected={selectedMenu} onClick={setSelectedMenu} />
            </div>
            <Footer />
        </div>
    )
}
