import './App.css';

import { Button } from './components/button'
import {CardApp} from './components/gitCards'
import {GameApp} from './components/starMatchGame'

import {FacebookMenu} from './menu/facebookDropdownMenu/facebookDropdownMenu'
import {SidebarNavigationMenu} from './menu/sidebarNavigationMenu'

function App() {
    return (
    <div className = "App" >
        <SidebarNavigationMenu />
    </div>
    );
}

export default App;