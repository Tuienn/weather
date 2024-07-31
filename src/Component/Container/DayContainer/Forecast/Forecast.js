import { useContext, useEffect } from 'react';

import { SelectContext } from '../../Container';
import {returnIcon} from '../../../../Handle/getImg'

import './Forecast.css'

function Forecast() {
    const valueContext = useContext(SelectContext);

    const selectDay = valueContext.selectDay

    const times = valueContext.weatherDays[selectDay]

    const selectTime = valueContext.selectTime
    const setSelectTime = valueContext.setSelectTime

    const length_times = times.length - 1
    return ( 
        <div className="forecast">
            <div className="title">
                <div>TODAY'S FORECAST</div>
                <div>{length_times} available forecasts</div>
            </div>
            <div className='timeItems'>
                {   
                    times.map((time, index)=>{
                        if(index<length_times){
                            return (
                                <div 
                                    key={index} 
                                    className='timeItem'
                                    onClick={()=>setSelectTime(index)}
                                    style={index===selectTime ? {
                                        backgroundColor: 'rgba(255, 255, 255, 0.25)'
                                    }:{}}
                                >
                                        {time.time.slice(0, 5)}
                                        <img src={returnIcon(time.icon)} alt=""/>
                                        {time.tempFeel}°C
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div> 
    );
}

export default Forecast;