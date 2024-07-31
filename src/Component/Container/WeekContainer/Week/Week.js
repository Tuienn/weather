import { memo, useContext } from 'react';

import { SelectContext } from '../../Container';
import { getLastOfArray } from '../../../../Handle/groupDay';

import DayItem from './DayItem/DayItem';

import './Week.css'
function Week() {
    const valueContext = useContext(SelectContext);
    const weatherDays_general = []

    valueContext.weatherDays.map(item => {
        weatherDays_general.push(getLastOfArray(item))
    })

    const selectDay = valueContext.selectDay
    const setSelectDay = valueContext.setSelectDay

    const setSelectTime = valueContext.setSelectTime
    
    return ( 
        <div className="week">
            <div className="title">WEEKLY FORECAST</div>
            {weatherDays_general.map((dayItem, index)=>{
                let primary=false;
                if(selectDay===index){
                    primary=true;
                }

                return(
                    <DayItem 
                        key={index} 
                        dayItem={dayItem} 
                        setSelectDay={()=>{
                            setSelectDay(index)
                            setSelectTime(0)
                        }}
                        primary = {primary}
                    />
                )
            })}
        </div> 
    );
}
export default memo(Week)