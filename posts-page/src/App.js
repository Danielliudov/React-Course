import React from 'react';
import './App.css';
import Posts from "./pages/Posts.js";

class App extends React.Component{
    render() {
        return (
            <div className='container'>
                <Posts />
            </div>
        );
    }
}

export default App;
