import { useContext } from 'react';

import { SelectContext } from '../../Container';
import { returnEmoji, returnIcon } from '../../../../Handle/getImg';

import './MainContent.css'

function MainContent() {
    const valueContext = useContext(SelectContext)

    const selectDay = valueContext.selectDay
    const selectTime = valueContext.selectTime
    const times = valueContext.weatherDays

    const mainSelect = times[selectDay][selectTime]
    console.log(mainSelect);

    return ( 
        <div className="mainContent">
            <div className='mainContent-1'>
                <div>CURRENT WEATHER</div>
                <div className='mainData'>
                    {returnEmoji(mainSelect.temp)}
                    <div style={{fontSize: '2rem'}}>
                        {mainSelect.temp}°C
                    </div>
                    <div>
                        <img src={returnIcon(mainSelect.icon)}alt="" />
                        {mainSelect.des}
                    </div>
                </div>
            </div>
            <div className='mainContent-2'>
                <div>AIR CONDITIONS</div>
                 
                <div className='mainData mainData-2'>
                    <div>
                        <div>
                            <i className="fa-solid fa-temperature-three-quarters"></i>
                            Real feel
                        </div>
                        {mainSelect.tempFeel}°C
                    </div>

                    <div>
                        <div>
                            <i className="fa-solid fa-wind"></i>
                            Wind
                        </div>
                        {mainSelect.wind}m/s
                    </div>

                    <div>
                        <div>
                            <i className="fa-brands fa-cloudversify"></i>
                            Clouds
                        </div>
                        {mainSelect.clouds}%
                    </div>

                    <div>
                        <div>
                            <i className="fa-solid fa-droplet"></i>
                            Humidity
                        </div>
                        {mainSelect.humidity}%
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default MainContent;