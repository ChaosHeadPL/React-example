import logo from './logo.svg';
import './App.css';

import { Button } from './components/button'
import {CardApp} from './components/gitCards'
import {GameApp} from './components/starMatchGame'

function App() {
    return (
    <div className = "App" >
        <GameApp />
    </div>
    );
}

export default App;