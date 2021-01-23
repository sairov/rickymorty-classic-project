import React, {Fragment} from 'react'
import Header from './Components/Header'
import Characters from './Components/Characters'
import './main.scss'
import './Components/header.css'
const App = () => {
    return (
    <> 
        <Header
            title="Rick & Morty API"
        />
        <Characters/>
    </>
    );
}
 
export default App;