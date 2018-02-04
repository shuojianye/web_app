import 'materialize-css/dist/css/materialize.min.css';
import NewsPanel from '../NewsPanel/NewsPanel';
import 'materialize-css/dist/js/materialize.min.js';

import  React from 'react';
import './App.css';
import logo from './logo.png';

class App extends React.Component{
    render(){
        return(
            <div>
                <img className='logo' src = {logo} alt = 'logo'/>
                <div classname = 'container'>
                    <NewsPanel />
                </div>
            </div>
        );
        
    }
}
export default App;