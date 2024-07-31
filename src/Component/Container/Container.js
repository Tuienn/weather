import { useEffect, useState, createContext } from 'react';
import {fetchForecastData} from '../../API/Fetch'
import { groupDay_date } from '../../Handle/groupDay';

import Day from './DayContainer/Day';
import Week from './WeekContainer/Week/Week';

export const SelectContext = createContext()

function Container({lat, lon}) {
    const [weatherDays, setWeatherDays] = useState([])
    const [selectDay, setSelectDay] = useState(0)
    const [selectTime, setSelectTime] = useState(0)
    
    useEffect(()=>fetchForecastData(lat, lon, setData_week_day), [lat, lon])

    const setData_week_day = (data)=>{
        setWeatherDays(groupDay_date(data.list))
    }

    return ( 
        <SelectContext.Provider value={{weatherDays, selectDay, selectTime, setSelectDay, setSelectTime}}>
            {weatherDays.length>0 &&(
                <div className="container" style={{height: 'calc(84% - 15px)', display: 'flex', fontSize: '0.8rem'}}>
                    <Day/>
                    <Week/>
                </div>
            )}   
        </SelectContext.Provider>
    );
}

export default Container;