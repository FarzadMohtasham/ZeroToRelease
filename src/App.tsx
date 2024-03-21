import {JSX} from 'react'
import './App.scss'
import './assets/styles/global.scss'
import './assets/styles/variables.scss'
import './assets/styles/typography.scss'
import './assets/styles/responsive-classes.scss'

import NavBar from "./layout/NavBar.tsx";
import BottomNavBar from "./layout/BottomNavBar.tsx";
import Hero from "./layout/Hero.tsx";
import Services from "./layout/Services.tsx";
import TechStack from "./layout/TechStack.tsx";


function App(): JSX.Element {
    return (
        <div className='app'>
            <NavBar/>
            <BottomNavBar/>
            <Hero/>
            <Services/>
            <TechStack/>

            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default App
