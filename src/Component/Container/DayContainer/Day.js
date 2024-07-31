import {  memo } from 'react';

import MainContent from './MainContent/MainContent';
import Forecast from './Forecast/Forecast';

import './Day.css'

function Day() {
    return ( 
        <div className="dayContainer">
            <MainContent/>
            <Forecast/>
        </div>
     );
}

export default memo(Day);