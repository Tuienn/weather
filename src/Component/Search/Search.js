import { memo, useEffect, useState } from "react";
import { fetchCityData } from '../../API/Fetch';

import './Search.css'

function Search({ setLocation }) {

    const [key, setKey] = useState('');
    const [focus, setFocus] = useState(false);
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        if(key!='' && !key.includes(',')){
            fetchCityData(key, setListSearch_CITY)
        }
        if(key=='')
            setListSearch([])
    }, [key]);

    const setListSearch_CITY = (cities)=>{
        if(cities.data != undefined)
            setListSearch(cities.data)
        else
            setListSearch([])
    }
    
    return (
        <div className="search">
            <i className="fa-solid fa-magnifying-glass find"></i>

            <input
                type="text"
                placeholder="Search city..."
                value={key}
                onChange={e => setKey(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}

                style={key!=''&&focus==true?{borderRadius: '15px 15px 0px 0px'}:{}}
            />

            <i className="fa-solid fa-xmark close"
                onClick={()=>setKey('')}
            ></i>
            
            {focus && listSearch &&
                <ul>
                    {listSearch.map((city) => (
                        <li key={city.id} onMouseDown={(e) => {
                            setFocus(false); // Tắt lựa chọn
                            setKey(`${city.city}, ${city.country}`); // Set giá trị cho key và cho input
                            
                            setListSearch([city])
                            setLocation({
                                lat: city.latitude.toFixed(2),
                                lon: city.longitude.toFixed(2)
                            })
                        }}>
                            {city.city}, {city.country}
                        </li>
                    ))}
                </ul>}
        </div>
    );
}

export default memo(Search);
