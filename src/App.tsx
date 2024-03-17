import './App.scss'
import './styles/global.scss'
import './styles/variables.scss'
import './styles/typography.scss'
import './styles/responsive-classes.scss'

import NavBar from "./components/NavBar.tsx";

function App() {
    return (
        <div className='app'>
            <NavBar/>
        </div>
    )
}

export default App
