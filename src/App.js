import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './view/Home'
import ProviderContext from './states/provider'

function App() {
    return (
        <ProviderContext>
            <Home/>
        </ProviderContext>
)
}
export default App;
