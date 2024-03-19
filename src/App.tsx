import './App.scss'
import './assets/styles/global.scss'
import './assets/styles/variables.scss'
import './assets/styles/typography.scss'
import './assets/styles/responsive-classes.scss'

import NavBar from "./layout/NavBar.tsx";
import BottomNavBar from "./layout/BottomNavBar.tsx";

function App() {
    return (
        <div className='app'>
            <NavBar/>
            <BottomNavBar/>
        </div>
    )
}

export default App
