import { returnDayFromDate } from '../../../../../Handle/getTime';

import './DayItem.css'

function DayItem({dayItem, setSelectDay, primary}) {
    return ( 
        <div 
            className="dayItem" 
            onClick={setSelectDay}
            style={primary===true ? {
                backgroundColor: 'rgba(255, 255, 255, 0.25)'
            }:{}}
        >
            <div className='dayItem-1'>
                <div>{returnDayFromDate(dayItem.date)}</div>

                <div>
                    <i className="fa-solid fa-temperature-three-quarters"></i>
                    {dayItem.tempMin} - {dayItem.tempMax}°C
                </div>
                <div>
                    <i className="fa-solid fa-wind"></i>
                    {dayItem.windMin} - {dayItem.windMax}m/s
                </div>
            </div>

            <div className='dayItem-2'>
                <div>{dayItem.date}</div>

                <div>
                    <i className="fa-brands fa-cloudversify"></i>
                    {dayItem.cloudsMin} - {dayItem.cloudsMax}%
                </div>

                <div>
                    <i className="fa-solid fa-droplet"></i>
                    {dayItem.humidityMin} - {dayItem.humidityMax}%
                </div>
            </div>
        </div> 
    );
}

export default DayItem;