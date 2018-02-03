import  React from 'react';
import './App.css';
import logo from './logo.png'

class App extends React.Component{
    render(){
        return(
            <div>
                <img className='logo' src = {logo} alt = 'logo'/>
                <div classname = 'container'>
                    // todo
                </div>
            </div>
        );
        
    }
}
export default App;