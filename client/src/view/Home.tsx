import * as React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './Home.css'
import { MenuBar } from './MenuBar'

export const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='home-content'>
                <MenuBar />
            </div>
            <Footer />
        </div>
    )
}
