import React from 'react';
import "./main.css"
import List from '../list';

const Main = () => {
    return (
        <div className='main_container'>
            <div className='main_header'>
                Header
            </div>
            <List/>
        </div>
    )
}

export default Main;